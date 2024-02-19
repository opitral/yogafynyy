import dotenv from "dotenv";
dotenv.config();

function getEmailHtml(token) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Yoga</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Montserrat, Arial, sans-serif; background-color: #222;">
        <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="max-width: 600px; margin: auto;">
          <tr>
            <td style="background-color: #222; color: #fff; text-align: center; padding: 50px 20px;">
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.82422 32.0009L25.642 47.9859L57.1753 18.0141" stroke="#C5E812" stroke-width="10" stroke-linecap="round"/>
              </svg>
              <!-- <h1>Привіт!</h1> -->
              <h2 style="margin: 15px 0;">
                Привіт! Дякуємо за покупку!
              </h2>
              <p style="font-size: 14px;">
                Новий етап в твоєму житті настане разом з першою практикою йоги, тому не зволікай.
              </p>
              <a href="${process.env.TELEGRAM_BOT_LINK}?start=${token}" style="border: 1px solid; padding: 15px 50px; text-decoration: none; color: #C5E812; font-weight: bold; display: inline-flex; margin-top: 20px;">
                
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0168 0.117669C20.0605 -0.321611 21.2671 0.598492 21.0788 1.74367L18.8108 15.5007C18.1234 19.6467 8.93838 14.0565 9.52078 11.7497C9.74078 10.8827 13.2408 7.62467 15.2408 5.68767C16.0258 4.92667 15.6678 4.48767 14.7408 5.18767C12.4378 6.92567 8.74278 9.56867 7.52078 10.3127C5.00857 11.8414 -1.43658 8.7299 1.91678 7.31767L19.0168 0.117669Z" fill="#C5E812"/>
                </svg>
                  
                <span style="margin-left: 10px;">
                  Перейти до бота
                </span>
              </a>
     
              <p style="margin-top: 50px; text-align: center">
                Комʼюніті однодумців зі зворотнім звʼязком щодо всіх питань від майстра й тренерів:
                <a href="${process.env.TELEGRAM_CHAT_LINK}" style="color:#C5E812; text-decoration: none;">
                  @yogauastart
                </a>
              </p>
    
              <p style="margin-top: 50px; text-align: center; font-size: 14px;">
                Виникли запитання? <br>
                Звернись у
                <a href="${process.env.TELEGRAM_SUPPORT_LINK}"  style="color:#C5E812; text-decoration: none;">
                  службу турботи
                </a>
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
}

export default getEmailHtml;
