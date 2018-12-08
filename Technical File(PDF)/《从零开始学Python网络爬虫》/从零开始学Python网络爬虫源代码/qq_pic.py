import requests
from selenium import webdriver

headers = {
    'Cookies':'eas_sid=O1241829N3g2m1A8g4u8A2e1z6; LW_uid=M1B4a8m90352T1l9X6Z6b745p8; tvfe_boss_uuid=8084c25d7b0a1268; LW_sid=H1P479s0S522G1c9T0N530x4S4; pgv_pvi=3277686784; RK=ScHfZyUfW3; ptui_loginuin=799407181; pgv_si=s1991670784; _qpsvr_localtk=0.34491608251486205; ptcz=0c21579596a77cfff79a34ed2fe1743bcfbed7eb2da5d69867b7fc3ff51f0650; ts_last=web2.qq.com/; ts_refer=www.baidu.com/link; ts_uid=8163489048; ptisp=ctc; pt2gguin=o0799407181; uin=o0799407181; skey=@Ck3bWtJK6; p_uin=o0799407181; p_skey=FcR8o2ep*OXn2qW7ZHXRiRQq1Ju2ZOgqwjoa-dv1u3E_; pt4_token=rhl0MbJ31YUteqdB7BapbpxUlpUMSupWoEPgnGu83Js_; pgv_info=ssid=s8304333587; pgv_pvid=5447523008; o_cookie=799407181; ptwebqq=494fdca172f1d89c1b539b0d419c26d97f9253897e205eb605db88c38b1d1c57',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
}
html = requests.get('http://w.qq.com/',headers=headers)
driver = webdriver.PhantomJS()
driver.get('http://w.qq.com/')
print(driver.page_source)