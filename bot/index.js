const { Telegraf, Markup } = require("telegraf");
const axios = require("axios");
const schedule = require("node-schedule");
require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

function delMessage(ctx, messageId) {
  const startTime = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const endTime = new Date(startTime.getTime() + 1000);

  schedule.scheduleJob(
    { start: startTime, end: endTime, rule: "*/1 * * * * *" },
    async () => {
      await ctx.deleteMessage(messageId);
    }
  );
}

bot.start(async (ctx) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_BASE_LINK}/checkUser`,
      {
        user: ctx.message.chat.id,
        token: ctx.message.text.split(" ")[1],
      },
      { validateStatus: () => true }
    );

    if (response.data.error) {
      const lending = await axios.get(
        `${process.env.SERVER_BASE_LINK}/getLink/lending`,
        { validateStatus: () => true }
      );

      return await ctx.reply(
        "у вас немає доступу до начальної платформи. придбайте доступ на сайті",
        Markup.inlineKeyboard([
          [Markup.button.url("ПЕРЕЙТИ", lending.data.message)],
        ])
      );
    } else {
      return await ctx.reply(
          "Розкрий свій внутрішній потенціал та силу через йогу\n\nНестача енергії, некеровані емоції, страх, тривога та апатія, відсутність життєвої сили…\n\nКожен в своєму житті потрапляє на цей шлях.\n\nЩоб легше проживати такі періоди та виходити на нові ритми життя, ми ділимося з тобою практиками йоги, медитаціями та дихальними практиками, які вирівняють баланс в твоєму організмі та підвищать життєву енергію. Секрети щастя і успіху тепер стануть доступні тобі!",
          Markup.keyboard([
            ["йога FYSM"],
            ["дихальні практики"],
            ["практика медитації"],
            ["чат однодумців", "служба турботи"],
          ]).resize()
      );
    }
  } catch (error) {
    console.log(error);
    await ctx.reply(
      "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
    );
  }
});

bot.hears(
  new RegExp(
    ["йога FYSM", "дихальні практики", "практика медитації"].join("|"),
    "gi"
  ),
  async (ctx) => {
    try {
      const response = await axios.post(
        `${process.env.SERVER_BASE_LINK}/checkUser`,
        {
          user: ctx.message.chat.id,
          token: "",
        },
        { validateStatus: () => true }
      );

      if (response.data.error) {
        const lending = await axios.get(
          `${process.env.SERVER_BASE_LINK}/getLink/lending`,
          SERVER_BASE_LINK,
          { validateStatus: () => true }
        );

        return await ctx.reply(
          "у вас немає доступу до начальної платформи. придбайте доступ на сайті",
          Markup.inlineKeyboard([
            [Markup.button.url("ПЕРЕЙТИ", lending.data.message)],
          ])
        );
      } else {
        const format = {
          "йога FYSM": ["yoga", ["1", "2"]],
          "дихальні практики": ["breath", ["1", "1"]],
          "практика медитації": ["meditation", ["1", "1"]],
        };

        await ctx.reply(
          "оціни свій стан (від 1 до 10)",
          Markup.inlineKeyboard([
            [
              Markup.button.callback(
                "1",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][0]
                }`
              ),
              Markup.button.callback(
                "2",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][0]
                }`
              ),
              Markup.button.callback(
                "3",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][0]
                }`
              ),
            ],
            [
              Markup.button.callback(
                "4",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][0]
                }`
              ),
              Markup.button.callback(
                "5",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][0]
                }`
              ),
              Markup.button.callback(
                "6",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][1]
                }`
              ),
            ],
            [
              Markup.button.callback(
                "7",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][1]
                }`
              ),
              Markup.button.callback(
                "8",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][1]
                }`
              ),
              Markup.button.callback(
                "9",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][1]
                }`
              ),
            ],
            [
              Markup.button.callback(
                "10",
                `get_lesson_${format[ctx.message.text][0]}_${
                  format[ctx.message.text][1][1]
                }`
              ),
            ],
          ])
        );
      }
    } catch (error) {
      console.log(error);
      await ctx.reply(
        "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
      );
    }
  }
);

bot.hears("чат однодумців", async (ctx) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_BASE_LINK}/checkUser`,
      {
        user: ctx.message.chat.id,
        token: "",
      },
      { validateStatus: () => true }
    );

    if (response.data.error) {
      const lending = await axios.get(
        `${process.env.SERVER_BASE_LINK}/getLink/lending`,
        { validateStatus: () => true }
      );

      return await ctx.reply(
        "у вас немає доступу до начальної платформи. придбайте доступ на сайті",
        Markup.inlineKeyboard([
          [Markup.button.url("ПЕРЕЙТИ", lending.data.message)],
        ])
      );
    } else {
      const response = await axios.post(
        `${process.env.SERVER_BASE_LINK}/getLink/chat`,
        {
          user: ctx.message.chat.id,
        },
        { validateStatus: () => true }
      );

      if (response.data.error) {
        await ctx.reply(
          "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
        );
      } else {
        return await ctx.reply(
          "твоя спільнота однодумців. приєднуйся!",
          Markup.inlineKeyboard([
            [Markup.button.url("ПРИЄДНАТИСЯ", response.data.message)],
          ])
        );
      }
    }
  } catch (error) {
    console.log(error);
    await ctx.reply(
      "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
    );
  }
});

bot.hears("служба турботи", async (ctx) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_BASE_LINK}/checkUser`,
      {
        user: ctx.message.chat.id,
        token: "",
      },
      { validateStatus: () => true }
    );

    if (response.data.error) {
      const lending = await axios.get(
        `${process.env.SERVER_BASE_LINK}/getLink/lending`,
        { validateStatus: () => true }
      );

      return await ctx.reply(
        "у вас немає доступу до начальної платформи. придбайте доступ на сайті",
        Markup.inlineKeyboard([
          [Markup.button.url("ПЕРЕЙТИ", lending.data.message)],
        ])
      );
    } else {
      const response = await axios.get(
        `${process.env.SERVER_BASE_LINK}/getLink/support`,
        { validateStatus: () => true }
      );

      if (response.data.error) {
        await ctx.reply(
          "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
        );
      } else {
        return await ctx.reply(
          "твоя служба турботи, що готова допомогти!",
          Markup.inlineKeyboard([
            [Markup.button.url("НАПИСАТИ", response.data.message)],
          ])
        );
      }
    }
  } catch (error) {
    console.log(error);
    await ctx.reply(
      "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
    );
  }
});

bot.action(/^get_lesson_(.+)/, async (ctx) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_BASE_LINK}/checkUser`,
      {
        user: ctx.update.callback_query.message.chat.id,
        token: "",
      },
      { validateStatus: () => true }
    );
    if (response.data.error) {
      const lending = await axios.get(
        `${process.env.SERVER_BASE_LINK}/getLink/lending`,
        { validateStatus: () => true }
      );

      return await ctx.reply(
        "у вас немає доступу до начальної платформи. придбайте доступ на сайті",
        Markup.inlineKeyboard([
          [Markup.button.url("ПЕРЕЙТИ", lending.data.message)],
        ])
      );
    } else {
      const data = ctx.match[1].split("_");

      const response = await axios.post(
        `${process.env.SERVER_BASE_LINK}/getLesson`,
        {
          user: ctx.update.callback_query.message.chat.id,
          category: data[0],
          mood: data[1],
        },
        { validateStatus: () => true }
      );

      if (response.data.error) {
        return await ctx.answerCbQuery(response.data.error);
      } else {
        await ctx.deleteMessage();

        const linkResponse = await axios.post(
          `${process.env.SERVER_BASE_LINK}/getLink/instagram`,
          {
            user: ctx.update.callback_query.message.chat.id,
          },
          { validateStatus: () => true }
        );

        if (linkResponse.data.error) {
          await ctx.reply(
            "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
          );
        } else {
          const lessonMessage = await ctx.replyWithVideo(
            response.data.message.file_id,
            {
              caption: `${response.data.message.caption}\n\nбільше про йогу, харчування та здорове гнучке тіло в інстаграмі майстра: <a href="${linkResponse.data.message}">Серж Файний</a>`,
              protect_content: true,
              parse_mode: "HTML",
            }
          );
          delMessage(ctx, lessonMessage.message_id);
        }
      }
    }
  } catch (error) {
    console.log(error);
    await ctx.reply(
      "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
    );
  }
});

bot.launch();
