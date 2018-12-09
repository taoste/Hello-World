# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html


import pymongo

class AuthorPipeline(object):
    def __init__(self):
        client = pymongo.MongoClient('localhost', 27017)
        test = client['test']
        author = test['author']
        self.post = author
    def process_item(self, item, spider):
        info = dict(item)
        self.post.insert(info)
        return item