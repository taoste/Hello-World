from scrapy.spiders import CrawlSpider
from scrapy.selector import Selector
from scrapy.http import Request
from author.items import AuthorItem

class author(CrawlSpider):
    name = 'author'
    start_urls = ['http://www.jianshu.com/recommendations/users?page=1']

    def parse(self, response):
        base_url = 'http://www.jianshu.com/u/'
        selector = Selector(response)
        infos = selector.xpath('//div[@class="col-xs-8"]')
        for info in infos:
            author_url = base_url + info.xpath('div/h4/a/@href').extract()[0].split('/')[-1]
            author_name = info.xpath('div/h4/a/text()').extract()[0]
            article = info.xpath('div/div[@class="recent-update"]')[0]
            new_article = article.xpath('string(.)').extract()[0].strip('\n').replace(' ','').replace('\n','')
            yield Request(author_url,meta={'author_url':author_url,'author_name':author_name,'new_article':new_article},callback=self.parse_item)

        urls = ['http://www.jianshu.com/recommendations/users?page={}'.format(str(i)) for i in range(2,10)]
        for url in urls:
            yield Request(url,callback=self.parse)

    def parse_item(self,response):
        item = AuthorItem()
        item['author_url'] = response.meta['author_url']
        item['author_name'] = response.meta['author_name']
        item['new_article'] = response.meta['new_article']

        try:
            selector = Selector(response)
            if selector.xpath('//span[@class="author-tag"]'):
                style = '签约作者'
            else:
                style = '普通作者'
            focus = selector.xpath('//div[@class="info"]/ul/li[1]/div/a/p/text()').extract()[0]
            fans = selector.xpath('//div[@class="info"]/ul/li[2]/div/a/p/text()').extract()[0]
            article_num = selector.xpath('//div[@class="info"]/ul/li[3]/div/a/p/text()').extract()[0]
            write_num = selector.xpath('//div[@class="info"]/ul/li[4]/div/p/text()').extract()[0]
            like = selector.xpath('//div[@class="info"]/ul/li[5]/div/p/text()').extract()[0]

            item['style'] = style
            item['focus'] = focus
            item['fans'] = fans
            item['article_num'] = article_num
            item['write_num'] = write_num
            item['like'] = like
            yield item
        except IndexError:
            pass