let list_top = false;
let list_bottom = false;

var is = {
  func: (e) => typeof e === "function",
  str: (e) => typeof e === "string",
  obj: (e) => typeof e === "object",
  num: (e) => typeof e === "number",
  arr: (e) => Array.isArray(e),
  var: (e) => /^\$.+/.test(e),
  hex: (e) => /^#[\dabcdef]{3,8}$/.test(String(e).trim())
};

function config(updates, source = this, isFirstCall = true) {
  if (!is.obj(updates)) {
    throw new Error("function config must contain an object");
  }
  for (let key in updates) {
    if (is.obj(updates[key]) && updates[key] !== null && !Array.isArray(updates[key])) {
      if (!source[key] || typeof source[key] == "string") {
        source[key] = {};
      }
      config(updates[key], source[key], false);
    } else {
      source[key] = updates[key];
    }
  }
  if (isFirstCall) {
  }
  return source;
}

function el(tag) {
  return document.createElement(tag);
}

function setStyle(styles = {}, el = this.node) {
  if (styles?.bg) {
    styles.background = styles?.bg;
  }

  for (const st in styles) {
    el.style[st] = styles[st];
  }
}

function preProcess() {
  if (!list_top || !list_bottom) {
    list_top = document.createElement("div");
    list_top.className = "tst";
    list_bottom = document.createElement("div");
    list_bottom.className = "tst tst_bottom";
    document.body.append(list_top, list_bottom);
  }
}

function tstFunc(params = {}) {
  let direction;

  return {
    // node: div.cloneNode(true),
    // nodeText: text.cloneNode(true),
    // nodeTimer: timer.cloneNode(true),

    params,

    show: function (option) {
      let param = { ...params };

      

      if (is.obj(option)) {
        param = config(option, param)
      }

      let txt = "lorem ipsum dolor";

      if (option) {
        if (typeof option == "object") {
          txt = option.text;
        } else {
          txt = option;
        }
      }

      option ??= {};

      preProcess();

      let list = list_top;

      if (param.bottom) {
        list = list_bottom;
      }

      if (param.breakpoints) {
        for (const size in param.breakpoints) {
          if (innerWidth >= size) {
            param = config(param.breakpoints[size], param)
            // param.breakpoints[size].style = {
            //   ...param?.style,
            //   ...param.breakpoints[size]?.style,
            // };
            // param = {
            //   ...param,
            //   ...param?.breakpoints[size],
            //   // style: {
            //   //   ...param.breakpoints[size]?.style,
            //   //   ...param?.style
            //   // }
            // };
          }
        }
      }

      let {
        pos,
        bottom,
        offset,
        time,
        timer,
        speed,
        style,
        pauseOnHover,

        onopen,
        onclose,
        onclick,
        addToTop,

        btns,
      } = param || {};

      btns ??= [];
      onopen ||= () => {};
      onclose ||= () => {};
      onclick ??= () => {};
      // btnClose ||= ()=>{}
      pos ||= "end";
      offset ??= 10;
      time ||= 3000;
      speed ??= 200;
      pauseOnHover ??= true;

      list.style.padding = offset;

      direction = `translate(${
        pos == "start" ? "-100%" : pos == "end" ? "100%" : "0%"
      }, ${
        bottom && pos == "center"
          ? "100%"
          : !bottom && pos == "center"
          ? "-100%"
          : "0"
        // "0"
      })`;

      const node = el("div");
      const text = el("span");
      const timerNode = el("span");
      const btnsNode = el("div");

      let returnObj = {
        node,
        params,
        setStyle,
        text: txt,
        textNode: text,
        close: () => this.close(node),
        // onclose: () => {},
        // wait: () => new Promise((resolve, reject) => {}),
      }

      btns = btns.map((prop) => {
        let btn = el("button");
        btn.className = prop.class || "";
        // console.log(prop.style, btn.style);
        setStyle(prop.style, btn);

        btn.innerText = prop.text;
        prop.on ||= {};

        if (prop.closeOnClick) {
          btn.addEventListener("click", () => {
            this.close(node);
          });
        }
        if ("return" in prop) {
          btn.addEventListener("click", () => {
            returnObj.return = prop.return;
            this.close(node);
          });
        }

        for (const ev in prop.on) {
          btn.addEventListener(ev, () => {
            prop.on[ev]({
              close: () => this.close(node),
            });
          });
        }

        return btn;
      });

      node.style = "--ms-timer:" + time + "ms";

      setStyle(
        {
          transition: `all ${speed}ms`,
          alignSelf: pos,
          transform: direction,
          ...style,
        },
        node
      );

      // console.log(timerNode);

      setStyle(
        {
          // transition: `width ${time}ms linear`,
          // "--ms-timer": time + "ms",
          bg: param?.style?.bg,
        },
        timerNode
      );

      node.className = "tst_item " + (param.class || "");
      timerNode.className = "tst_timer";
      btnsNode.className = "tst_btns";

      // let a = 0
      // let b = 1

      // let nodeTransition = node.style.transition
      // let is_pressed = false
      // let is_target = false

      // document.body.addEventListener("mousedown", function(e){
      //   is_pressed = true
      //   is_target = e.target === node
      // })

      // document.body.addEventListener("mouseup", function(){
      //   is_pressed = false
      //   is_target = false
      // })

      // document.body.addEventListener("mousemove", function(e){
      //   if (is_pressed && is_target) {
      //     a += e.movementX * 2
      //     b -= e.movementX / 100
      //     console.log(b);
      //     node.style.transition = "none";
      //     node.style.transform = `translate(${a}px,0%)`
      //     node.style.opacity = Math.abs(b)
      //   }
      //   else {

      //     node.style.transition = nodeTransition;
      //   }
      //   console.log(is_pressed, is_target, a, b);
      // })

      text.innerText = txt;

      btnsNode.append(...btns);
      node.append(text);
      if (btnsNode.children.length) node.append(btnsNode);
      if (timer) node.append(timerNode);
      if (addToTop) {
        list.append(node);
      } else {
        list.prepend(node);
      }

      setTimeout(() => {
        node.style.transform = "translate(0%, 0%)";
        node.style.opacity = 1;
        // timerNode.style.width = 0;
        onopen(node, param);
      }, 0);
      
      setTimeout(() => {
        timerNode.classList.add("tst_timer_animation");
        
      }, speed);

      let to_remove = setTimeout(() => {
        onclose(node, param);
        this.close(node);
      }, time + speed);

      let remian = Date.now();
      let last = 0;

      if (pauseOnHover) {
        node.addEventListener("mouseenter", () => {
          timerNode.style.animationPlayState = "paused";

          clearTimeout(to_remove);
          last = Date.now() - remian;
        });

        node.addEventListener("mouseleave", () => {
          timerNode.style.animationPlayState = "running";

          remian = Date.now();
          last = 0;

          to_remove = setTimeout(() => {
            onclose(node, param);
            this.close(node);
          }, time - last);
        });
      }

      if (params.max) {
        if (list.children.length >= params.max) {
          [...list.children].forEach((el, index) => {
            if (index > params.max - 1) {
              this.close(el);
            }
          });
        }
      }

      if (onclick) {
        node.addEventListener("click", (event) => {
          let result = onclick({
            event,
            node,
            params,
            text: txt,
            textNode: text,
          });
          // console.log(result);
          if (result === "stop") return;
          clearTimeout(to_remove);
          this.close(node);
        });
      }

      return returnObj;
    },

    close: function (node) {
      node.style.transform = direction;
      node.style.opacity = 0;
      node.ontransitionend = (event) => {
        if (event.propertyName === "transform") {
          node.remove();
        }
      };
    },

    showAsync: function (option) {
      return new Promise((resolve) => {
        const item = this.show(option);

        item.node.addEventListener("transitionstart", (event) => {
          if (
            event.propertyName === "opacity" &&
            event.target === item.node &&
            item.node.style.opacity == 0
          ) {
            // if ("return" in item) {
            //   resolve(item.return);
            // }
            resolve(item.return);
          }
        });
      });
    },
  };
}

export const Tst = tstFunc;

// if (typeof window !== "undefined") {
//   window.Tst = tstFunc;
// }
