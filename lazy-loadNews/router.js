app.get('/getNews', function(req, res) {
    var news = [{
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        }, {
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        }, {
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        }, {
            link: 'http://finance.qq.com/a/20170531/003233.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611832811_150120/0',
            title: '多名员工证实乐视开启新一轮裁员',
            int: '乐视开启新一轮裁员....'
        },
        {
            link: 'http://news.qq.com/a/20170531/010139.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1612137967_150120/0',
            title: '军队招生单位名录发布',
            int: '军队招生单位名录发布....'
        },
        {
            link: 'http://finance.qq.com/a/20170531/002698.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1611812784_150120/0',
            title: '北京二手房价大跌',
            int: '北京二手房价大跌....'
        }

    ]
    var pageIndex = req.query.page;
    var len = 5;

    var retNews = news.slice(pageIndex * len, pageIndex * len + len)

    res.send({
        status: 0,
        data: retNews
    })
})