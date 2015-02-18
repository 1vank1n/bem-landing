({
    block : 'page',
    title : 'BEM landing',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { charset : 'utf-8' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'meta', attrs : { name : 'description', content : 'Landing description...' } },
        { elem : 'css', url : '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' },
        { elem : 'css', url : '//fonts.googleapis.com/css?family=Roboto:400,300,700|Open+Sans:700' },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [
        { elem : 'js', url : '_index.js' }
    ],
    mods : { theme : 'bem' },
    content : [
        {
            block : 's-header',
            content : [
                {
                    block : 'topbar',
                    content : [
                        {
                            block : 'container',
                            content : [
                                {
                                    block : 'row',
                                    content : [
                                        {
                                            elem : 'col',
                                            mods : { mw : 4 },
                                            content : [
                                                {
                                                    block : 'link',
                                                    url : '/',
                                                    content : [
                                                        {
                                                            block : 'image',
                                                            mix : { block: 's-header', elem : 'logo' },
                                                            url : '../../img/logo.svg',
                                                            width : 100
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'col',
                                            mods : { mw : 8 },
                                            content : [
                                                {
                                                    block : 'menubar',
                                                    mix : { block: 's-header', elem: 'menubar' },
                                                    content : [
                                                        {
                                                            block : 'link',
                                                            mix : { block: 'menubar', elem: 'link' },
                                                            url : '#about',
                                                            content : 'БЭМ'
                                                        },
                                                        {
                                                            block : 'link',
                                                            mix: { block: 'menubar', elem: 'link' },
                                                            url: '#team',
                                                            content : 'Команда'
                                                        },
                                                        {
                                                            block : 'link',
                                                            mix: { block: 'menubar', elem: 'link' },
                                                            url: '#contacts',
                                                            content : 'Вливайся'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 12 },
                                    content : [
                                        {
                                            block : 'slider',
                                            js : true,
                                            content : [
                                                {
                                                    elem : 'slide',
                                                    content : 'Блок'
                                                },
                                                {
                                                    elem : 'slide',
                                                    content : 'Элемент'
                                                },
                                                {
                                                    elem : 'slide',
                                                    content : 'Модификатор'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 's-counter',
            content : [
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'counter',
                                            js : { 'count': 256 },
                                            heading : 'Проектов',
                                            description : 'Количество проектов выполненных на полном БЭМ-стэке.'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'counter',
                                            js : { 'count': 1200 },
                                            heading : 'Разработчиков',
                                            description : 'Наше сообщество люто набирает обороты. Вливайся и ты! Stay BEMed!'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'counter',
                                            js : { 'count': 74 },
                                            heading : 'БЭМ-библиотеки',
                                            description : 'Уже сейчас заряжены и готовы к использованию БЭМ-библиотеки.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 's-about',
            content : [
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 12 },
                                    content : [
                                        {
                                            block : 'heading',
                                            mods : { level : '2', align : 'center' },
                                            content : 'BEM?! БЭМ? Что?! Эт классно! Изучи и заиспользуй!'
                                        },
                                        {
                                            elem : 'description',
                                            mix : { block : 's-about', elem : 'description' },
                                            tag : 'p',
                                            content : 'При использовании БЭМ-подхода все разработчики сайта оперируют единым кодом и общаются в одних и тех же терминах, на одном языке!'
                                        },
                                        {
                                            block : 'image',
                                            mix : { block : 's-about', elem : 'image' },
                                            url : '../../img/bem.png',
                                            height : 400
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 's-slice',
            content : [
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'fa',
                                            icon : 'wrench',
                                            size : '5x',
                                            color : '#fff'
                                        },
                                        {
                                            block : 'heading',
                                            mods : { level : '2', align : 'center' },
                                            content : 'Поддержка'
                                        },
                                        {
                                            elem : 'description',
                                            tag : 'p',
                                            content : 'Технология придумана и разработана в Яндексе. Так что жить ей поживать и добра наживать! Поддержка и развитие обеспечено!'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'fa',
                                            icon : 'code-fork',
                                            size : '5x',
                                            color : '#fff'
                                        },
                                        {
                                            block : 'heading',
                                            mods : { level : '2', align : 'center' },
                                            content : 'Своя библиотека'
                                        },
                                        {
                                            elem : 'description',
                                            tag : 'p',
                                            content : 'Создай свой набор реиспользуемых блоков. И клепай сайты так быстро, как только можешь!'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'fa',
                                            icon : 'github',
                                            size : '5x',
                                            color : '#fff'
                                        },
                                        {
                                            block : 'heading',
                                            mods : { level : '2', align : 'center' },
                                            content : 'OpenSource'
                                        },
                                        {
                                            elem : 'description',
                                            tag : 'p',
                                            content : 'Всё написано людьми для людей. Никаких чёрных ящиков пандоры. Посмотри сам как это работает!'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 's-team',
            content : [
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 12 },
                                    content : [
                                        {
                                            block : 'heading',
                                            mods : { level : '2', align : 'center' },
                                            content : 'Кто мы? Встречайте нашу команду!'
                                        },
                                        {
                                            elem : 'description',
                                            mix : { block : 's-team', elem : 'description' },
                                            tag : 'p',
                                            content : 'Есть вопросы, предложения, идеи – напишите нам.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mix : { block : 's-team', elem: 'teamrow' },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'teamate',
                                            name : 'Виталий Харисов',
                                            avatar : 'https://raw.github.com/bem/bem-method/bem-info-data/people/avatars/harisov-vitaly.png',
                                            facebook : '',
                                            twitter : 'https://twitter.com/harisov',
                                            github : 'https://github.com/vithar',
                                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rerum, inventore saepe laborum hic consequuntur, culpa debitis dolorem quam quod dignissimos possimus impedit dolorum vero vitae fugiat voluptatibus vel! Esse.'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'teamate',
                                            name : 'Сергей Бережной',
                                            avatar : 'https://raw.github.com/bem/bem-method/bem-info-data/people/avatars/berezhnoy-sergey.jpg',
                                            facebook : '',
                                            twitter : 'https://twitter.com/veged',
                                            github : 'https://github.com/veged',
                                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur, officia porro nobis non ipsa, perspiciatis accusamus amet aspernatur laboriosam expedita? Debitis asperiores, aliquam hic voluptatem non iure quaerat sunt.'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 4 },
                                    content : [
                                        {
                                            block : 'teamate',
                                            name : 'Владимир Гриненко',
                                            avatar : 'https://raw.github.com/bem/bem-method/bem-info-data/people/avatars/grinenko-vladimir.png',
                                            facebook : '',
                                            twitter : 'https://twitter.com/tadatuta',
                                            github : 'https://github.com/tadatuta',
                                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt placeat, optio error tempore maiores reprehenderit soluta, dolores eaque, laborum reiciendis numquam mollitia. Dicta expedita quas autem, optio accusamus vitae.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mix : { block : 's-team', elem : 'show-all' },
                            mods : { mac : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 3 },
                                    content : [
                                        {
                                            block : 'button',
                                            mods : { theme : 'islands', size : 'xl', type : 'link' },
                                            url : 'https://ru.bem.info/authors',
                                            text : 'Огласите весь список!'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 's-slice',
            mods : { subscribe : true },
            content : [
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 12 },
                                    content : [
                                        {
                                            block : 'heading',
                                            mods : { level : '2', align : 'center' },
                                            content : 'Подпишись на рассылку о БЭМ-событиях'
                                        },
                                        {
                                            elem : 'description',
                                            tag : 'p',
                                            content : 'Обещаем не наживаться на продаже твоего емэйла всяческим спам-базам. Слово пионера!'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 12 },
                                    content : [
                                        {
                                            block : 'control-group',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'islands', size : 'm', type : 'search', 'has-clear' : true },
                                                    placeholder : 'Введите email'
                                                },
                                                {
                                                    block : 'button',
                                                    mods : { theme : 'islands', size : 'm', view : 'action' },
                                                    text : 'Подписаться'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { mac : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 1},
                                    content : [
                                        {
                                            block : 'link',
                                            url : 'http://github.com/bem/',
                                            content : [
                                                {
                                                    block : 'fa',
                                                    mods : { 'in-circle' : true },
                                                    icon : 'github',
                                                    size : '3x',
                                                    color : '#fff'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 1 },
                                    content : [
                                        {
                                            block : 'link',
                                            url : 'http://www.facebook.com/#!/groups/209713935765634/',
                                            content : [
                                                {
                                                    block : 'fa',
                                                    mods : { 'in-circle' : true },
                                                    icon : 'facebook',
                                                    size : '3x',
                                                    color : '#fff'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 1 },
                                    content : [
                                        {
                                            block : 'link',
                                            url : 'https://twitter.com/bem_ru',
                                            content : [
                                                {
                                                    block : 'fa',
                                                    mods : { 'in-circle' : true },
                                                    icon : 'twitter',
                                                    size : '3x',
                                                    color : '#fff'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { mw : 1 },
                                    content : [
                                        {
                                            block : 'link',
                                            url : 'https://ru.bem.info/forum/',
                                            content : [
                                                {
                                                    block : 'fa',
                                                    mods : { 'in-circle' : true },
                                                    icon : 'comments',
                                                    size : '3x',
                                                    color : '#fff'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 's-footer',
            content : [
                {
                    block : 'container',
                    content : [
                        {
                            block : 'row',
                            mods : { mar: true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { mw : 6 },
                                    content : 'БЭМ – Технология создания веб-приложений &copy;'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
