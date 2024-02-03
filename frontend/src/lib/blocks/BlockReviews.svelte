<script>
	import Btn from '$lib/ui/Btn.svelte';
    import { onMount } from 'svelte';

    let reviews = [
        {
            userIcon: "/img/reviews/1.png",
            userName: "@OksanaRomanova",
            text: `Добрий день, дякую Вам велике за Ваша практики в телеграм «Його сім'я» Через насичені, навантажені дні + хворобу, не могла спати тиждень, організм вимучився, нерви полетіли, тиск впав і пішла перевтома, через яку не могла відновитися ( Ризикнула на втомлений організ зробити йогу, вірила, що це допоможе і першу ніч хоч трохи змогла поспати і відновитися, відчуваю себе краще, пройшов заняття і після шавасани просто сльози вдячності тіла і організму за практику, якийсь внутрішній мандраж (стрес) зробила сьогодні ще раз покотились сльози) я думаю що це вийшла вся напруга та були. Дуже вдячна Вам за таку можливіст. Йога дійсно зцілює`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/2.png",
            userName: "@Lizalord",
            text: `Які зміни я помітила . Я сталапочуватися міцнішою і не тільки фізично, а також психологічно. Я потрапила на практики, в загостренему стані тривожно депресивного розладу і мені здавалося, що я не витримую. І от я розтелила коврик і в моєму житті почалися кардинальні зміни і в кращу сторону. Я почала дослуховуватися до себе, відчувати себе. Я стала краще харчуватися. Моє тіло стало підтягнутим . Я стала краще спати. Я хоч і немогла потрапляти на онлайн і робила все через записи, але і взаписах відчувалася та атмосфераДякую за таку можливість`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/3.png",
            userName: "@onlylmaar",
            text: `Дякую за практику. Все більш розумію, що онлайн набагато краще, ніж чиїсь записи. А офлайн зовсім буде вогонь, сподіваюсь... Треба щось все змінювати, бо я знаю, що можу краще. Дивно те, що я вже давно роблю павука, аштавакрасану, тощо. Плечі гнуться, як лоза закачала. з довірою все добре. Руки Але якісь елементарні речі, як кішка або собака, НЕ ПОЛУЧАЕТСЯ. Прям як і з рідною мовою: запашний, примарний, колежанка, тощо я знаю. а НЕ ПОЛУЧАЕТСЯ не получилось згадати`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/4.png",
            userName: "@dianaa_great",
            text: `Дуже вдячна за практику, як завжди сильно! Коли тримаєш руку на середині здається, що все, ну вже пора здаватись, але ти це пересилюєш і відкривається друге дихання і тримати вже не так важко і це завдяки наставництву @faynyy`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/5.png",
            userName: "@skazhy_palyanytsya",
            text: `Серж, величезне дякую за таку кайфову практику, дякую всім за спільне поле сьогодні було кілька ситуацій, які раніше мали б вивести мене з себе, але помітила за собою, що почала набагато спокійніше все приймати і всю біль та агресію на ті ситуації я відпускаю і проживаю за йогою дякую за цю можливість`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/6.png",
            userName: "@ViktoriiaBondarenko",
            text: `Кайфую від занять і бляха це вперше! Я зранку з ліжка просто підриваюсь, бо хочу з тілом працювати і відчуття, що робила б це цілий день взагалі не впізнаю себе ще на минулому тижні моя фізична активність (крім роботи на ногах і побуту) дорівнювала нулю а за ці 2,5 дні вже мінус 1 кг на вагах (набряки посходили і взагалі немає здуття, яке було присутнє від деяких продуктів) Що ж буде далі?`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/7.png",
            userName: "@andromashka",
            text: `Сьогодні в інституті мала модулі по РДУГ. Йога є доказовим методом у допомозі по саморегуляції розладу. Він не лікується, але механізми регуляції кожен знаходить собі індивідуально. Тому, зробила висновок. Що для мене ЙОГА це життєвонеобхідна щоденна практика, щоб не провалбіатись в незрозумілі стани та залишатись продуктивний та позитивним.`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/8.png",
            userName: "@elizabet_fedoryshyn",
            text: `Дякую за ранкову практику і дихальні вправи. Відчула кожен м'яз і клітинку тіла. І дуже офігенний стан свідомості після цього всього. Пішла закріплювати цей стан прогулянкою біля ріки`,
            stars: 5
        },
        {
            userIcon: "/img/reviews/9.png",
            userName: "anonymous",
            text: `Щаслива що потрапила сюди. Я знайшла те, що давно шукала! За тиждень такий чудовий результат отримала, тіло стала сильнішим, підтягнутим. Стала більш спокійною з дітьми, яких маю аж троє (вони самі дивуються чого це мама така), більше кайфуй до життя з'явилося, змінились харчові звички`,
            stars: 5
        },
    ]

    import Swiper from "swiper"

    

    function slider(node) {
        

        const swiper = new Swiper(node, {
            slidesPerView: 1.3,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                992: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                }
            },
            // It doesn't work, I don't know why

            // autoplay: {
            //     delay: 1000,
            //     disableOnInteraction: false,
            // },
        });

        
        // Alternative way
        function setInt() {
            return setInterval(() => swiper.slideNext(), 3000);
        }

        let int = setInt()

        node.addEventListener("mouseenter", () => clearInterval(int))
        node.addEventListener("mouseleave", () => int = setInt())
    }
    
</script>


<section flex="col" class="cir cir-tr mt-50 mb-100" id="reviews" >
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">
            Чому варто довіритися
        </h2>

        <p class="subtitle" text="up" data-aos="fade-down" data-aos-delay="100">
            Відгуки задоволених клієнтів та практиків
        </p>


        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="swiper w-full mt-30" use:slider>
            <div class="swiper-wrapper">
                <!-- <div flex="30 m-md:col" class="mt-30 " > -->

                

                {#each reviews as {userIcon, userName, text, stars}, index}
                    <!-- <div class="swiper-slide"> -->
                        <div
                            class="bg-#2d2d2d p-30 swiper-slide"
                            flex="20 col"
                            
                        >
                            <div flex="20 ai-c">
                                <img class="sq-50 round" src={userIcon} alt="">
                                <p text="10 md:14 bold up">{userName}</p>
                            </div>
                            
                            <p text="12 md:14">{text}</p>

                            <div>
                                <img style:opacity={stars >= 1 ? 1 : .3} src="/icon/star.svg" alt="">
                                <img style:opacity={stars >= 2 ? 1 : .3} src="/icon/star.svg" alt="">
                                <img style:opacity={stars >= 3 ? 1 : .3} src="/icon/star.svg" alt="">
                                <img style:opacity={stars >= 4 ? 1 : .3} src="/icon/star.svg" alt="">
                                <img style:opacity={stars >= 5 ? 1 : .3} src="/icon/star.svg" alt="">
                            </div>
                        </div>
                    <!-- </div> -->
                    
                {/each}
            </div>
                
            <!-- </div> -->
        </div>
    </div>
</section>

<!-- <script>
    import { onMount } from "svelte";

    
  
    onMount(()=>{
        const swiper = new Swiper(".swiper")
    })
</script> -->


<!-- <div class="swiper" id="fff">

    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>

    <div class="swiper-pagination"></div>
  

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  

    <div class="swiper-scrollbar"></div>
  </div> -->