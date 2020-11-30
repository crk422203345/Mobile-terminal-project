<template>
  <div id="app">
    <div>
      <!-- 首页 -->
      <van-row>
        <van-col span="3" class="juzhong">
          <van-icon name="scan" class="ztdx1" />
        </van-col>
        <van-col span="18" class="juzhong">
          <van-cell-group class="changdu">
            <van-field
              v-model="value1"
              left-icon="qr"
              right-icon="search"
              placeholder="显示图标"
              class="ztdx2"
            />
          </van-cell-group>
        </van-col>
        <van-col span="3" class="juzhong">
          <van-icon name="comment-circle-o" class="ztdx3" dot />
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-tabs v-model="active">
            <van-tab title="推荐">
              <van-row>
                <van-col span="24">
                  <van-swipe
                    class="my-swipe"
                    :autoplay="3000"
                    indicator-color="white"
                  >
                    <van-swipe-item>
                      <img src="../../img/1.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/2.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/3.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/4.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/5.png" alt="" width="350px" />
                    </van-swipe-item>
                  </van-swipe>
                </van-col>
              </van-row>

              <van-row class="juzhong jianju">
                <van-col span="24" class="changdu2">
                  <van-col span="10" class="juzhong">
                    <img src="../../img/6.png" width="145" alt="" />
                  </van-col>
                  <van-col span="14" class="juzhong neibianju">
                    <ul>
                      <li>从功能需求衍生的空间裂变|52.设计 易永强</li>
                      <li>
                        <span>热门</span>
                        <span>硬装</span>
                        <span>软装</span>
                      </li>
                      <li>
                        <span>1天前</span>
                        <span><van-icon name="eye-o"/></span>
                        <span>309</span>
                      </li>
                    </ul>
                  </van-col>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju2">
                <van-col span="24" class="changdu2">
                  <van-col span="10" class="juzhong">
                    <img src="../../img/7.png" width="145" alt="" />
                  </van-col>
                  <van-col span="14" class="juzhong neibianju">
                    <ul>
                      <li>1200m2复式豪宅，有气质，更有颜值</li>
                      <li>
                        <span>热门</span>
                        <span>硬装</span>
                        <span>软装</span>
                      </li>
                      <li>
                        <span>1天前</span>
                        <span><van-icon name="eye-o"/></span>
                        <span>161</span>
                      </li>
                    </ul>
                  </van-col>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju2">
                <van-col span="24" class="changdu2">
                  <van-col span="10" class="juzhong">
                    <img src="../../img/8.png" width="145" alt="" />
                  </van-col>
                  <van-col span="14" class="juzhong neibianju">
                    <ul>
                      <li>从事苗圃经营的姑娘，买下自带花园大别墅，把321m2.</li>
                      <li>
                        <span>热门</span>
                        <span>硬装</span>
                        <span>软装</span>
                      </li>
                      <li>
                        <span>1天前</span>
                        <span><van-icon name="eye-o"/></span>
                        <span>176</span>
                      </li>
                    </ul>
                  </van-col>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju">
                <van-col span="24" class="nrchangdu">
                  <ul>
                    <li>
                      看看迪拜大平层，32层只有39套公<br />寓，这配置是真奢华!
                    </li>
                    <li>
                      <span>热门</span>
                      <span>硬装</span>
                      <span>软装</span>
                      <span>资讯</span>
                    </li>
                    <li>
                      <img src="../../img/9.png" width="350" alt="" />
                    </li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju">
                <van-col span="24" class="changdu2">
                  <van-col span="10" class="juzhong">
                    <img src="../../img/10.png" width="145" alt="" />
                  </van-col>
                  <van-col span="14" class="juzhong neibianju">
                    <ul>
                      <li>张建武●逐光|几何式光形延展的空间</li>
                      <li>
                        <span>热门</span>
                        <span>硬装</span>
                        <span>软装</span>
                      </li>
                      <li>
                        <span>1天前</span>
                        <span><van-icon name="eye-o"/></span>
                        <span>241</span>
                      </li>
                    </ul>
                  </van-col>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju2">
                <van-col span="24" class="changdu2">
                  <van-col span="10" class="juzhong">
                    <img src="../../img/11.png" width="145" alt="" />
                  </van-col>
                  <van-col span="14" class="juzhong neibianju">
                    <ul>
                      <li>195m雅灰大平层，静奢间勾勒家的温情!</li>
                      <li>
                        <span>热门</span>
                        <span>硬装</span>
                        <span>软装</span>
                      </li>
                      <li>
                        <span>1天前</span>
                        <span><van-icon name="eye-o"/></span>
                        <span>251</span>
                      </li>
                    </ul>
                  </van-col>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju2">
                <van-col span="24" class="changdu2">
                  <van-col span="10" class="juzhong">
                    <img src="../../img/8.png" width="145" alt="" />
                  </van-col>
                  <van-col span="14" class="juzhong neibianju">
                    <ul>
                      <li>从功能需求衍生的空间裂变|5 2.设计易永强</li>
                      <li>
                        <span>热门</span>
                        <span>硬装</span>
                        <span>软装</span>
                      </li>
                      <li>
                        <span>1天前</span>
                        <span><van-icon name="eye-o"/></span>
                        <span>410</span>
                      </li>
                    </ul>
                  </van-col>
                </van-col>
              </van-row>
            </van-tab>
            <van-tab title="活动">
              <van-row>
                <van-col span="24">
                  <van-swipe
                    class="my-swipe"
                    :autoplay="3000"
                    indicator-color="white"
                  >
                    <van-swipe-item>
                      <img src="../../img/13.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/14.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/15.png" alt="" width="350px" />
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="../../img/16.png" alt="" width="350px" />
                    </van-swipe-item>
                  </van-swipe>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju">
                <van-col span="24" class=" juzhong3 ">
                  <ul>
                    <li>热门活动</li>
                    <li>
                      逻&nbsp;&nbsp;辑&nbsp;&nbsp;中&nbsp;&nbsp;人&nbsp;&nbsp;，&nbsp;&nbsp;局&nbsp;&nbsp;&nbsp;不&nbsp;&nbsp;能&nbsp;&nbsp;停
                    </li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju3">
                <van-col span="24" class=" juzhong4 ">
                  <ul>
                    <li>
                      <img src="../../img/17.png" width="350" alt="" />
                    </li>
                    <li>百G线上设计素材，数百种定制家具材料,打造...</li>
                    <li>活动时间: 2020/09/21-2022/09/01</li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju3">
                <van-col span="24" class=" juzhong4 ">
                  <ul>
                    <li>
                      <img src="../../img/18.png" width="350" alt="" />
                    </li>
                    <li>另一种家具生意-- - -- -iJAYA全球招募令..</li>
                    <li>活动时间: 2020/06/01-2021/05/31</li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju3">
                <van-col span="24" class=" juzhong4 ">
                  <ul>
                    <li>
                      <img src="../../img/19.png" width="350" alt="" />
                    </li>
                    <li>为奋斗者喝彩|回眸2019，翘首2020。</li>
                    <li>活动时间: 2020/01/17- -2020/01/18</li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju3">
                <van-col span="24" class=" juzhong4 ">
                  <ul>
                    <li>
                      <img src="../../img/20.png" width="350" alt="" />
                    </li>
                    <li>上海酒店展门票免费限量预约，内附超全逛展指...</li>
                    <li>活动时间: 201 9/04/25-2019/04/27</li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju3">
                <van-col span="24" class=" juzhong4 ">
                  <ul>
                    <li>
                      <img src="../../img/23.png" width="350" alt="" />
                    </li>
                    <li>号外号外!_上海滩大佬、 设计界名流齐聚百乐门..</li>
                    <li>活动时间: 2019/04/26- -201 9/04/26</li>
                  </ul>
                </van-col>
              </van-row>
              <van-row class="juzhong jianju3">
                <van-col span="24" class=" juzhong4 ">
                  <ul>
                    <li>
                      <img src="../../img/22.png" width="350" alt="" />
                    </li>
                    <li>从住逻辑本次酒店展营销，看设计之外的七大制...</li>
                    <li>活动时间: 201 9/04/25- -2019/04/27</li>
                  </ul>
                </van-col>
              </van-row>
            </van-tab>
            <van-tab title="案例">
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/24.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >山东尼山书院酒店禾易建筑</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>5399</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/25.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >Studio Rick Joy Combin...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>8566</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/26.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >Lilitt Bollinger I瑞士- -间...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>4463</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/27.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5">建业里嘉佩乐酒店</span>
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>3012</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/28.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >新古典主义精品酒店|迪...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>3498</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/29.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >240m简约大平层，灰奢...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>11.9k</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/30.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >雅奢宝格丽--广西阳光城...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>3261</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/31.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >重庆万科，美好生活体验...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>3017</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/32.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >恰到好处的温柔轻奢，三...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>9609</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/33.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5">BNA ALTER MUSEUM美...</span>
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>1614</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/34.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >Dunes by Whiting Archit...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>1796</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/35.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5"
                                >1 99m高级灰江左风华样...</span
                              >
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>9020</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-col span="24" class=" juzhong4">
                  <van-row type="flex" justify="space-between">
                    <van-col span="12">
                      <van-row type="flex">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/36.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5">亚太首家Canopy酒店,</span>
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>2345</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                    <van-col span="12">
                      <van-row type="flex" justify="end">
                        <van-col span="23" class="jianju4">
                          <ul>
                            <li>
                              <img
                                src="../../img/37.png"
                                width="165.69"
                                alt=""
                              />
                            </li>
                            <li>
                              <span class="daxiao5">亚太首家Canopy酒店,</span>
                            </li>
                            <li>
                              <span><van-icon name="eye-o"/></span>
                              <span>3549</span>
                            </li>
                          </ul>
                        </van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </van-tab>
            <van-tab title="定制">
              <van-row gutter="22" class="juzhong jianju3">
                <van-row>
                  <van-col span="24" class="juzhong4">
                    <img src="../../img/38.png" width="350" alt="" />
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju3">
                <van-row>
                  <van-col span="24" class="juzhong5">
                    <ul>
                      <li>住逻辑是专业的柔性定制家具制造商,</li>
                      <li>总部位于上海，为酒店、地产商、商业</li>
                      <li>空间及家具品牌商、全球创意设计师等</li>
                      <li>提供家具生产和交付服务。</li>
                    </ul>
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong6">
                    <p>01</p>
                    <p>定制实力</p>
                    <p>
                      住逻辑通过原材料海外直采、自建旗舰工厂、数字化运.,
                      营管理、到终端自主交付，在全国建有多个家具制造基
                      地和产品展示中心。在江苏南通建有华东地区独具规模.
                      的家具生产基地，精工大厂，智能制造。
                    </p>
                    <ul>
                      <li><img src="../../img/39.png" width="350" alt="" /></li>
                      <li><img src="../../img/40.png" width="350" alt="" /></li>
                    </ul>
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong6">
                    <p>02</p>
                    <p>系统赋能</p>
                    <p>
                      自主研发了工业4.0系统，从原材料采购、图纸和研发资
                      料数据化管理，生产流程和计划排期管控，到终端客户
                      的交付和安装，全程管控生产流。
                    </p>
                    <ul>
                      <li><img src="../../img/41.png" width="350" alt="" /></li>
                    </ul>
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong6">
                    <p>03</p>
                    <p>智能报价</p>
                    <p>
                      多种报价方式，1秒识别方寨图片生产清单，最快2小时 出报价。
                    </p>
                    <p>在线确认下单，随时查看订单生产进程。</p>
                    <p class="yanse">点击图片右下方的按钮即刻体验</p>
                    <ul>
                      <li><img src="../../img/42.png" width="350" alt="" /></li>
                    </ul>
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong6">
                    <p>04</p>
                    <p>服务理念</p>
                    <p>
                      我们通过原材料、工艺结构、质检标准及服务流程标准
                      化监管产品和服务品质。同时自建物流和交付团队，8小
                      时交钥匙法则，全天候全品类，交付无忧。
                    </p>
                    <ul>
                      <li><img src="../../img/43.png" width="350" alt="" /></li>
                    </ul>
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong6">
                    <p>05</p>
                    <p>定制流程</p>
                    <ul>
                      <li><img src="../../img/44.png" width="350" alt="" /></li>
                    </ul>
                  </van-col>
                </van-row>
              </van-row>
              <van-row gutter="22" class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong6">
                    <p>06</p>
                    <p>落地项目</p>
                    <p>
                      成立至今,住逻辑累计落地项目超过20000个，项目类
                      型涵盖五星及超五星精品酒店、样板间售楼处、商业空
                      间、私家住宅、豪华游轮、私人飞机等。
                    </p>
                  </van-col>
                </van-row>
              </van-row>
              <van-row class="juzhong jianju6">
                <van-row>
                  <van-col span="24" class="juzhong7">
                    <p>立即注册</p>
                  </van-col>
                </van-row>
              </van-row>
            </van-tab>
          </van-tabs>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      active: 0
    };
  }
};
</script>
<style scoped>
.biankaungxiang {
  border: solid 1px;
}
.juzhong7{
  width: 380px;
  background: #eb5757;
  color: white;
  font-weight:bold;
  font-size: 20px;
  text-align: center;
  padding: 15px;
}
.yanse {
  color: red;
}
.juzhong6 {
  font-size: 16px;
  width: 350px;
}
.juzhong6 ul li {
  margin-top: 20px;
}
.juzhong6 p:nth-of-type(1) {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.juzhong6 p:nth-of-type(2) {
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
}
.juzhong6 p:nth-of-type(3) {
  margin-top: 10px;
}
.jianju6 {
  margin-top: 40px;
}
.juzhong5 {
  font-weight: bold;
  font-size: 15px;
  width: 270px;
}
.juzhong5 ul li {
  padding: 5px;
}
.jianju4 ul li:nth-of-type(2) {
  padding: 5px 0 5px 0;
}
.van-icon-eye-o::before {
  content: "\F054";
  font-size: 2px;
  font-size: 15px;
  vertical-align: middle;
}
.jianju4 ul li:nth-of-type(3) span:nth-of-type(2) {
  font-size: 14px;
  margin-left: 7px;
  vertical-align: middle;
}
.daxiao5 {
  font-size: 13px;
}
.juzhong4 ul li:nth-of-type(3) {
  color: #6d6d6d;
}
.juzhong4 ul li:nth-of-type(2) {
  font-weight: bold;
}
.jianju3 {
  margin-top: 20px;
}
.juzhong4 {
  width: 350px;
}
.juzhong3 ul li:nth-of-type(2) {
  color: #717171;
  font-size: 14px;
}
.juzhong3 ul li:nth-of-type(1) {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
.juzhong3 {
  text-align: center;
  padding: 0 0 0 15px;
}
.jianju2 {
  margin-top: 15px;
}
.jianju {
  margin-top: 30px;
}
.neibianju ul li:nth-of-type(1) {
  font-weight: bold;
}
.neibianju ul li:nth-of-type(2) span {
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  color: #9b9b9b;
  font-size: 13px;
}
.neibianju ul li:nth-of-type(2) span:not(:nth-of-type(1)) {
  margin-left: 5px;
}
.neibianju ul li:nth-of-type(2) {
  margin: 5px 0px 5px 0px;
}
.neibianju ul li:nth-of-type(3) span {
  color: #9b9b9b;
  font-size: 13px;
}
.neibianju ul li:nth-of-type(3) span:not(:nth-of-type(1)) {
  margin-left: 15px;
}
.neibianju ul li:nth-of-type(3) span:nth-of-type(1) {
  margin-left: 75px;
}
.neibianju {
  padding-left: 28px;
}
.changdu2 {
  width: 350px;
}
.nrchangdu {
  width: 350px;
}
.nrchangdu ul li:nth-of-type(1) {
  font-weight: bold;
}
.nrchangdu ul li:nth-of-type(2) span {
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  color: #9b9b9b;
  font-size: 13px;
}
.nrchangdu ul li:nth-of-type(2) span:not(:nth-of-type(1)) {
  margin-left: 5px;
}
.nrchangdu ul li:nth-of-type(2) {
  margin: 10px 0px 10px 0px;
}
.my-swipe .van-swipe-item {
  margin-top: 10px;
  text-align: center;
}

.juzhong {
  display: flex;
  justify-content: center;
}
#app {
  padding-top: 10px;
  padding-bottom: 70px;
}
.van-cell {
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 5px 5px !important;
}
.van-cell-group {
  width: 272px;
}
.van-icon-scan::before {
  content: "\F0AE";
  font-size: 24px;
}
.van-icon-comment-circle-o::before {
  content: "\F039";
  font-size: 24px;
}
.ztdx1 {
  margin-top: 5px;
}
.changdu {
  float: left;
}
.ztdx3 {
  margin-top: 5px;
}
</style>
