import { Telegraf, Markup } from "telegraf";
import schedule from "node-schedule";
import dotenv from "dotenv";
import db from "../backend/db.js";

import UserModel from "../backend/models/UserModel.js";
import PaymentModel from "../backend/models/PaymentModel.js";
import LessonModel from "../backend/models/LessonModel.js";

dotenv.config();

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

async function errorMessage(ctx, error) {
    console.log(error);
    await ctx.reply(
        "виникла помилка, спробуй ще раз. не виходить - значить наша команда уже працює над якнайшвидшим розвʼязанням проблеми"
    );
}

async function sendNotification() {
    try {
        const users = await UserModel.find({});

        for (const user of users) {
            if (user.telegram) {
                const messages = [
                    "Кожного дня ти маєш 1140 хвилин життя⏰\n" +
                    "Тому знайди 40 хвилин і приділи їх своєму здоров‘ю разом з YOGA ▲ HATA",

                    "Ти маєш тренувати своє тіло, щоб воно не заважало тобі реалізовувати плани душі🪬 YOGA ▲ HATA",

                    "В тебе все вийде! Найтяжче зробити лише перший крок, а далі відкривається новий, чудовий шлях. YOGA ▲ HATA 🙏🏻",

                    "Практики Йоги роблять твоє тіло молодим та здоровим і покращують пам‘ять та роботу мозку. YOGA ▲ HATA🧘🏻‍♂️",

                    "Зверни увагу на своє дихання. Прямо зараз Зупинись, і відчуй життя всередині себе🫁\n" +
                    "Відчуй як ти дихаєш\n" +
                    "YOGA ▲ HATA",

                    "Всі проблеми не тільки в голові - вони у тілі\n" +
                    "У кожній з 30 триліардів клітин які є в тобі\n" +
                    "Жени геть стрес і апатію і практикуй з YOGA ▲ HATA 💪🏻",

                    "Ментальне здоров‘я так само важливе як і фізичне. Працюєш над тілом - покращуєш роботу мозку🧠\n" +
                    "YOGA ▲ HATA",

                    "Страх, стрес і апатія. Не давай цим словам заважати тобі жити. Практикуй і позбувайся негативу зі свого життя😇\n" +
                    "YOGA ▲ HATA",

                    "Страх, стрес і апатія. Не давай цим словам заважати тобі жити. Практикуй і позбувайся негативу зі свого життя😇\n" +
                    "YOGA ▲ HATA",

                    "Залиште у своєму житті тільки те що надихає Вас і наповнює Енергією⚡️\n" +
                    "З усім іншим - прощайтесь без жалю\n" +
                    "YOGA ▲ HATA",

                    "Знаходь світло у собі та лови свій РИТМ- навіть під час лютої пітьми🤍\n" +
                    "YOGA ▲ HATA",

                    "Цінуй кожен свій день, цінуй кожну хвилину свого життя - і ти будеш щасливий😊\n" +
                    "Практикуй медитацію та йогу - ставай свідомим та здоровим \n" +
                    "YOGA ▲ HATA",

                    "Твої мрії важливі - МРІЙ\n" +
                    "Рухайся вперед, дій, досягай, здійснюй⚡️\n" +
                    "Не слухай тих хто каже негатив про тебе\n" +
                    "Практикуй щоб стати сильним та наповненим разом з YOGA ▲ HATA 🙏🏻\n",

                    "Ми прагнемо Любові, Шукаємо Часу і боїмося Смерті🥺\n" +
                    "Будь сильним і незламним разом з \n" +
                    "YOGA ▲ HATA. \n" +
                    "Не бійся нічого😎",

                    "Ідеальності не існує - ти такий який є🤍\n" +
                    "І в цьому твоя унікальність\n" +
                    "YOGA ▲ HATA твій Бот-Провідник🙏🏻",

                    "Дозволь собі падати🙏🏻\n" +
                    "Дозволь собі допускати помилки\n" +
                    "Не бійся здаватися\n" +
                    "Все що зараз відбувається - це шлях😊\n" +
                    "Без поразок - немає успіху. YOGA ▲ HATA",

                    "Не варто зациклюватися на тому чого вам бракує - не забувайте насолоджуватися тим що маєте. \n" +
                    "YOGA ▲ HATA",

                    "Годі хвилюватися за те що ВИ не контролюєте🙏🏻\n" +
                    "Розслабтесь. Практики дихання допоможуть в цьому. YOGA ▲ HATA",

                    "Це теж мине😊\n" +
                    "Тобі погано, розлютився, злишся, не знаєш що робити. Практикуй. І ти відчуєш кайф та енергію для життя та дій⚡️\n" +
                    "YOGA ▲ HATA"
                ]
                const randomMessage = Math.floor(Math.random() * messages.length)

                await bot.telegram.sendMessage(user.telegram, messages[randomMessage]);
            }
        }
    } catch (error) {
        console.error("Error sending notification:", error);
    }
}

schedule.scheduleJob("0 18 */2 * *", async () => {
    await sendNotification();
});

bot.use(async (ctx, next) => {
    const message = ctx.message ?? ctx.update.callback_query?.message
    console.log(message)

    const user = await UserModel.findOne({telegram: message.chat.id ?? ""})

    if (user) {
        return next()
    }

    if (ctx.message.text.startsWith("/start")) {
        const key = message.text.split(" ")[1]

        const payment = await PaymentModel.findOneAndUpdate({key: key}, {$set: {key: ""}})

        if (payment?.payed) {
            await UserModel.findOneAndUpdate({_id: payment.user}, {$set: {telegram: message.chat.id}})
            return next()
        }
    }

    await ctx.reply("у вас немає доступу до начальної платформи. придбайте доступ на сайті",
        Markup.inlineKeyboard([
            [Markup.button.url("ПЕРЕЙТИ", process.env.BASE_URL)],
        ])
    );
});

bot.start(async (ctx) => {
    try {
        await ctx.reply("Розкрий свій внутрішній потенціал та силу через йогу\n\nНестача енергії, некеровані емоції, страх, тривога та апатія, відсутність життєвої сили…\n\nКожен в своєму житті потрапляє на цей шлях.\n\nЩоб легше проживати такі періоди та виходити на нові ритми життя, ми ділимося з тобою практиками йоги, медитаціями та дихальними практиками, які вирівняють баланс в твоєму організмі та підвищать життєву енергію. Секрети щастя і успіху тепер стануть доступні тобі!",
            Markup.keyboard([
                ["йога FYSM"],
                ["дихальні практики"],
                ["практика медитації"],
                ["чат однодумців", "служба турботи"],
            ]).resize()
        );

    } catch (error) {
        await errorMessage(ctx, error)
    }
});

bot.hears(
    new RegExp(
        ["йога FYSM", "дихальні практики", "практика медитації"].join("|"),
        "gi"
    ),
    async (ctx) => {
        try {
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
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][0]
                            }`
                        ),
                        Markup.button.callback(
                            "2",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][0]
                            }`
                        ),
                        Markup.button.callback(
                            "3",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][0]
                            }`
                        ),
                    ],
                    [
                        Markup.button.callback(
                            "4",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][0]
                            }`
                        ),
                        Markup.button.callback(
                            "5",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][0]
                            }`
                        ),
                        Markup.button.callback(
                            "6",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][1]
                            }`
                        ),
                    ],
                    [
                        Markup.button.callback(
                            "7",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][1]
                            }`
                        ),
                        Markup.button.callback(
                            "8",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][1]
                            }`
                        ),
                        Markup.button.callback(
                            "9",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][1]
                            }`
                        ),
                    ],
                    [
                        Markup.button.callback(
                            "10",
                            `lesson_${format[ctx.message.text][0]}_${
                                format[ctx.message.text][1][1]
                            }`
                        ),
                    ],
                ])
            );
        } catch (error) {
            await errorMessage(ctx, error)
        }
    }
);

bot.hears("чат однодумців", async (ctx) => {
    try {
        await ctx.reply(
            "твоя спільнота однодумців. приєднуйся!",
            Markup.inlineKeyboard([
                [Markup.button.url("ПРИЄДНАТИСЯ", process.env.TELEGRAM_CHAT_LINK)],
            ])
        );

    } catch (error) {
        await errorMessage(ctx, error)
    }
});

bot.hears("служба турботи", async (ctx) => {
    try {
        await ctx.reply(
            "твоя служба турботи, що готова допомогти!",
            Markup.inlineKeyboard([
                [Markup.button.url("НАПИСАТИ", process.env.TELEGRAM_SUPPORT_LINK)],
            ])
        );

    } catch (error) {
        await errorMessage(ctx, error)
    }
});

bot.action(/^lesson_(.+)/, async (ctx) => {
    try {
        const data = ctx.match[1].split("_");

        const user = await UserModel.findOne({telegram: ctx.update.callback_query.message.chat.id})

        if (data[0] !== "meditation") {
            const lastContent = new Date(user.lastContent[data[0]].datetime);

            if (user.lastContent[data[0]].count >= 2) {
                const nextDay = new Date(lastContent);
                nextDay.setDate(lastContent.getDate() + 1);
                nextDay.setHours(0, 0, 0, 0);

                if (new Date().getTime() > nextDay.getTime()) {
                    user.lastContent[data[0]].count = 0;
                    await user.save();
                }

                return await ctx.answerCbQuery("Ви не можете отримати більше двох практик на одну добу");
            }

            lastContent.setHours(lastContent.getHours() + 2);

            if (lastContent > Date.now()) {
                return await ctx.answerCbQuery("Має пройти мінімум 2 години між отриманням практик")
            }
        }

        const lessons = await LessonModel.find({
            _id: { $ne: user.lastContent[data[0]].lesson?.toString() },
            category: data[0],
            mood: data[1],
            disable: false
        });

        if (!lessons.length) {
            return await ctx.answerCbQuery("Практику не знайдено")
        }

        await ctx.deleteMessage(ctx.update.callback_query.message.message_id)

        const randomLessonIndex = Math.floor(Math.random() * lessons.length);
        const randomLesson = lessons[randomLessonIndex];

        user.lastContent[data[0]].lesson = randomLesson._id;
        user.lastContent[data[0]].datetime = Date.now();
        user.lastContent[data[0]].count += 1;
        user.save();

        if (randomLesson.type === "media") {
            if (randomLesson.files.low) {
                await ctx.reply("оберіть якість відео", Markup.inlineKeyboard([
                    [Markup.button.callback("HD", `quality_${randomLesson._id}_high`)],
                    [Markup.button.callback("мобільна", `quality_${randomLesson._id}_low`)]
                ]))

            } else {
                const lessonMessage = await ctx.replyWithVideo(
                    randomLesson.files.high,
                    {
                        caption: `${randomLesson.caption}\n\nбільше про йогу, харчування та здорове гнучке тіло в інстаграмі майстра: <a href="${process.env.INSTAGRAM_LINK}">Серж Файний</a>`,
                        protect_content: true,
                        parse_mode: "HTML",
                    }
                );

                delMessage(ctx, lessonMessage.message_id);
            }

        } else {
            const photoMassage = await ctx.replyWithPhoto(randomLesson.photo)
            const lessonMessage = await ctx.replyWithAudio(
                randomLesson.files.high,
                {
                    caption: `${randomLesson.caption}\n\nбільше про йогу, харчування та здорове гнучке тіло в інстаграмі майстра: <a href="${process.env.INSTAGRAM_LINK}">Серж Файний</a>`,
                    protect_content: true,
                    parse_mode: "HTML",
                }
            )

            delMessage(ctx, photoMassage.message_id);
            delMessage(ctx, lessonMessage.message_id);
        }

    } catch (error) {
        await errorMessage(ctx, error)
    }
});

bot.action(/^quality_(.+)/, async (ctx) => {
    try {
        const data = ctx.match[1].split("_");

        await ctx.deleteMessage(ctx.update.callback_query.message.message_id)

        const lesson = await LessonModel.findOne({_id: data[0]})

        const lessonMessage = await ctx.replyWithVideo(
            lesson.files[data[1]],
            {
                caption: `${lesson.caption}\n\nбільше про йогу, харчування та здорове гнучке тіло в інстаграмі майстра: <a href="${process.env.INSTAGRAM_LINK}">Серж Файний</a>`,
                protect_content: true,
                parse_mode: "HTML",
            }
        );

        delMessage(ctx, lessonMessage.message_id);

    } catch (error) {
        await errorMessage(ctx, error)
    }
})

bot.launch()
