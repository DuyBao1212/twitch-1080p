# Ru

Простое расширение, разблокирующее на Твиче качество 1080p в регионах, где оно теперь не поддерживается.

Расширение просто пускает домен usher.ttvnw.net через прокси сервер, тем самым разблокируя доступ к качеству 1080p не влияя на другие аспекты сайта. 

Я не разработчик на JS, так что расширение было написано в том числе с помощью LLM. Можно использовать как временное решение, пока более опытные разработчики не сделают что-то более осмысленное. 

## Установка

1. [Скачайте](https://github.com/MoDDyChat/twitch-1080p/releases/download/release/Twitch1080.zip) и распакуйте архив;
2. Откройте Chrome и введите в адресную строку "chrome://extensions/";
3. В верхней правой части окна включите "Режим разработчика";
4. В верхней левой части окна нажмите "Загрузить распакованное расширение";
5. Выберите папку, в которую распаковали расширение;
6. Не забудьте нажать кнопку "Включить" в настройках расширения.
7. Готово!

Вы можете заменить мой временный прокси-сервер на любой другой в "background.js", строчка "proxyHost".

# Eng

A simple extension that unlocks 1080p quality on Twitch in regions where it is currently not supported.

The extension runs domain usher.ttvnw.net through a proxy server, thereby unlocking access to 1080p quality without affecting other aspects of the site.

I'm not a JS developer, so the extension was written using LLM as well. It can be used as a temporary solution until more experienced developers make something more meaningful.

## Installing

1. [Download](https://github.com/MoDDyChat/twitch-1080p/releases/download/release/Twitch1080.zip) and unzip the archive;
2. Open Chrome and enter "chrome://extensions/" in the address bar;
3. In the upper right part of the window, enable "Developer mode";
4. In the upper left part of the window, click "Load unpacked extension";
5. Select the folder where you unpacked the extension;
6. Don't forget to click the "Enable" button in the extension settings.
7. Done!

You can replace my temporary proxy server with any other in "background.js", line "proxyHost".
