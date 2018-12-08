import sys
sys.path.append("..")
import time
from page_spider import tongcheng

while True:
    print(tongcheng.find().count())
    time.sleep(5)