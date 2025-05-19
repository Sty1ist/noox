import telebot
from flask import Flask, request
import threading

TOKEN = '7774437746:AAE4rEzA0cmDKt_r4tQWLGdfBFuckgVPnZ8'
bot = telebot.TeleBot(TOKEN)
app = Flask(__name__)

# 1. Коли пишуть /start — надсилаємо chat_id
@bot.message_handler(commands=['start'])
def handle_start(message):
    bot.send_message(message.chat.id, f"👋 Привіт! Твій chat_id: `{message.chat.id}`", parse_mode='Markdown')

# 2. Flask маршрут — отримує запити з форми (наприклад, з фронта)
@app.route('/sendform', methods=['POST'])
def send_form_data():
    data = request.json
    message = f"""🆕 Нова відповідь з форми:

Крипто-досвід: {data.get('experience')}
Вік: {data.get('age')}
Юзер TG: {data.get('username')}
Джерело: {data.get('source')}
"""
    # 🔽 Встав сюди chat_id, який ти отримаєш після натискання /start
    bot.send_message(chat_id=7538727898, text=message)
    return 'ok'

# 3. Запускаємо бота у потоці
def run_bot():
    bot.polling()

if __name__ == '__main__':
    threading.Thread(target=run_bot).start()
    app.run(host='0.0.0.0', port=5000)
