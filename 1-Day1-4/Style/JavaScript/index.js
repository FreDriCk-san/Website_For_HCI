const head = (home, link, disabled, input_descript, input_button) => ({home, link, disabled, input_descript, input_button});

const main = (new_locations, loc_descript, new_timeline, time_descript, new_heroes, hero_descript, main_header,
              first_header, first_descript, second_header, second_descript, third_header, third_descript) =>
    ({new_locations, loc_descript, new_timeline, time_descript, new_heroes, hero_descript, main_header,
        first_header, first_descript, second_header, second_descript, third_header, third_descript});

const search = (name, link) => ({name, link});

const rate = (upper_txt, main_txt, yes_button, no_button, close_button) =>
    ({upper_txt, main_txt, yes_button, no_button, close_button});

const headers = [
    head('Home ','Rate','Soon', 'Our games...', 'Buy'),
    head('Домашняя страница ','Оценка','Скоро', 'Наши игры...', 'Купить')
];

const mains = [
    main('New Locations',
        'Added in version 2.3',
        'Day/Night change',
        'Update in incoming version',
        'New Heroes',
        'Side story actors',
        'What\'s new?',
        'New world',
        'It\'s also a new world up ahead.\n' +
            'What it is?\n' +
            'Maybe, just a beginning...',
        'New skills',
        'Also, there are multiple new skills!\n' +
            'Hope you will like it!',
        'New heroes',
        'A new side story for our precious customers.\n' +
            'Enjoy!'),

    main('Новые локации',
        'Добавлены в версии 2.3',
        'Смена дня и ночи',
        'Обновление в следующем патче',
        'Новые герои',
        'Персонажи \'побочной\' истории',
        'Что нового?',
        'Новый мир',
        'Вас ждёт очередное испытание.\n' +
            'Что же это?\n' +
            'Возможно, лишь новое начало...',
        'Новые способности',
        'Также, были добавлены новые способности!\n' +
            'Используйте их с умом!',
        'Новые герои',
        'Новая побочная история для наших драгоценных игроков.\n' +
            'Наслаждайтесь!')
];


const searches = [
    search('Sword Art Online: Fatal Bullet',
        'https://store.steampowered.com/app/626690/Sword_Art_Online_Fatal_Bullet/'),
    search('Sword Art Online Re: Hollow Fragment',
        'https://store.steampowered.com/app/638650/Sword_Art_Online_Re_Hollow_Fragment/'),
    search('Accel World VS. Sword Art Online Deluxe Edition',
        'https://store.steampowered.com/app/607880/Accel_World_VS_Sword_Art_Online_Deluxe_Edition/'),
    search('Sword Art Online: Hollow Realization Deluxe Edition',
        'https://store.steampowered.com/app/607890/Sword_Art_Online_Hollow_Realization_Deluxe_Edition/')
];


const rates = [
    rate('Do you like this website?',
        'Please, let us know your true rate...',
        'Yes',
        'No',
        'Close'),
    rate('Вам нравится этот сайт?',
        'Пожалуйста, скажите честно...',
        'Да',
        'Нет',
        'Закрыть')
];

let SetLanguage = new Vue({
    el: '#language',
    data: {
        head: headers[0],
        main: mains[0],
        searches: searches,
        search: searches[0],
        rate: rates[0]
    },
    methods: {
        SetEnglish: function () {
            this.head = headers[0];
            this.main = mains[0];
            this.rate = rates[0];
        },
        SetRussian: function () {
            this.head = headers[1];
            this.main = mains[1];
            this.rate = rates[1];
        },
        setSearchId: function () {
            this.search = searches[event.target.value];
        }
    }
});



$(document).ready(function () {


    let getDay = {
        today(){
            let currentday = new Date();

            return currentday.getFullYear()
                + '-' + currentday.getMonth()
                + '-' + currentday.getDate()
                + ' ' + currentday.getHours()
                + ':' + currentday.getMinutes()
                + ':' + currentday.getSeconds()
        }
    };


    $('.carousel').carousel({
        interval: 4000
    });


    $('#likeIt').click(function () {
        let sendData =
            {
                statement: "Like",
                upd_time: getDay.today()
            };

        $.ajax({
            type: 'POST',
            url: 'siteRating.php',
            data: JSON.stringify(sendData),
            contentType: 'application/json; charset=utf-8',
            complete: function (data) {
                console.log('Inserted ' + data);
            },
            error: function(exception) {
                console.log('Error' + exception);
            }
        });
    });


    $('#dislikeIt').click(function () {
        let sendData =
            {
                statement: "Dislike",
                upd_time: getDay.today()
            };

        $.ajax({
            type: 'POST',
            url: 'siteRating.php',
            data: JSON.stringify(sendData),
            contentType: 'application/json; charset=utf-8',
            complete: function (data) {
                console.log('Inserted ' + data);
            },
            error: function(exception) {
                console.log('Error' + exception);
            }
        });
    });
});









