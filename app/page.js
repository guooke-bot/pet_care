"use client";

import { useEffect, useState } from 'react';

const services = [
  {
    icon: '🛁',
    title: '基础洗护',
    desc: '温和清洁、深层去浮毛、吹干梳理和耳眼护理。',
  },
  {
    icon: '✂️',
    title: '美容造型',
    desc: '根据品种轮廓与毛发状态，提供修剪、整形和风格设计。',
  },
  {
    icon: '💆',
    title: 'SPA 护理',
    desc: '针对干燥、掉毛、皮肤敏感等问题，搭配护毛素、药浴和精油护理方案。',
  },
];

const advantages = [
  {
    num: '1',
    title: '低敏产品',
    desc: '洗护用品按毛发与皮肤状态选择，减少刺激，适合敏感体质宠物。',
  },
  {
    num: '2',
    title: '全程可视',
    desc: '透明工作区，洗护过程清晰可见，方便主人放心托付。',
  },
  {
    num: '3',
    title: '分区消毒',
    desc: '工具、台面、吹风区按次消毒，减少交叉接触风险。',
  },
  {
    num: '4',
    title: '可约接送',
    desc: '支持同城接送与到店预约，忙碌上班日也能轻松安排。',
  },
];

const gallery = [
  {
    src: '/assets/grooming-style.png',
    title: '美容造型修剪',
    subtitle: '圆脸、蓬松感、身体比例更协调',
    alt: '高端宠物美容造型案例',
  },
  {
    src: '/assets/basic-wash.png',
    title: '基础洗护',
    subtitle: '温和清洁，洗后更轻盈',
    alt: '基础洗护案例',
  },
  {
    src: '/assets/cat-wash.png',
    title: '猫咪温和洗护',
    subtitle: '更安静、更耐受的操作流程',
    alt: '猫咪温和洗护案例',
  },
  {
    src: '/assets/herbal-bath.png',
    title: '药浴护理',
    subtitle: '配合皮肤状态做针对性清洁',
    alt: '药浴护理案例',
  },
  {
    src: '/assets/spa-bath.png',
    title: 'SPA 护理',
    subtitle: '洗后毛发顺滑蓬松，手感更好',
    alt: '宠物SPA护理案例',
  },
  {
    src: '/assets/pickup-service.png',
    title: '接送服务',
    subtitle: '省心安排宠物到店洗护',
    alt: '宠物接送服务案例',
  },
];

const pricing = [
  {
    title: '基础洗护',
    price: '¥68',
    badge: '',
    items: ['洗澡 + 吹干 + 梳毛', '耳道清洁 + 指甲修整', '适合日常维护'],
  },
  {
    title: '美容套餐',
    price: '¥128',
    badge: '最受欢迎',
    items: ['基础洗护全套', '修毛 + 造型设计', '适合泰迪、比熊等'],
    featured: true,
  },
  {
    title: '护理升级',
    price: '¥168',
    badge: '',
    items: ['洗护 + SPA 护理', '药浴 / 护毛方案', '适合敏感皮肤与换毛季'],
  },
];

const reviews = [
  {
    text: '“我家狗狗以前很怕洗澡，这里流程很温柔，洗完毛蓬蓬的，摸起来特别舒服。”',
    avatar: 'L',
    meta: '李女士 · 泰迪犬家长',
  },
  {
    text: '“接送服务很方便，沟通也很及时。修剪后的造型很自然，不会太夸张。”',
    avatar: 'W',
    meta: '王先生 · 比熊犬家长',
  },
  {
    text: '“猫咪护理最怕粗暴，这家店会先安抚，再慢慢处理，体验比我预想的好很多。”',
    avatar: 'Z',
    meta: '赵女士 · 猫咪家长',
  },
];

const faqs = [
  {
    q: '宠物第一次来店里会紧张吗？',
    a: '会，所以我们会先安抚再操作，流程尽量轻柔，首次到店也会建议主人提前沟通宠物性格和禁忌。',
  },
  {
    q: '猫狗洗护时间大概多久？',
    a: '通常基础洗护约 60 到 90 分钟，美容和护理项目会更长，具体要看体型、毛量和配套服务。',
  },
  {
    q: '需要提前预约吗？',
    a: '建议提前预约，尤其是周末和节假日，方便安排宠物档期和美容师时间。',
  },
];

const petTypes = [
  { value: 'small-dog', icon: '🐶', title: '小型犬', desc: '泰迪、比熊、博美等' },
  { value: 'large-dog', icon: '🐕', title: '中大型犬', desc: '柴犬、金毛、边牧等' },
  { value: 'cat', icon: '🐱', title: '猫咪', desc: '短毛、长毛、布偶等' },
  { value: 'multi', icon: '🐾', title: '多宠家庭', desc: '可连续预约安排' },
];


const getDefaultArrivalTime = () => {
  const now = new Date();
  const nextDayAtTen = new Date(now);
  nextDayAtTen.setDate(now.getDate() + 1);
  nextDayAtTen.setHours(10, 0, 0, 0);

  const year = nextDayAtTen.getFullYear();
  const month = String(nextDayAtTen.getMonth() + 1).padStart(2, '0');
  const day = String(nextDayAtTen.getDate()).padStart(2, '0');
  const hours = String(nextDayAtTen.getHours()).padStart(2, '0');
  const minutes = String(nextDayAtTen.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const serviceTypes = [
  { value: 'basic', icon: '🛁', title: '基础洗护', desc: '洗澡、吹干、梳毛', defaultChecked: true },
  { value: 'beauty', icon: '✂️', title: '美容造型', desc: '修毛、造型、整形' },
  { value: 'spa', icon: '💆', title: 'SPA 护理', desc: '护毛、药浴、舒缓' },
  { value: 'pickup', icon: '🚗', title: '接送服务', desc: '到店与上门接送' },
];

export default function Page() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '客户');
    const phone = String(formData.get('phone') || '');
    const time = String(formData.get('time') || '');
    const service = String(formData.get('service-type') || '基础洗护');
    const pet = String(formData.get('pet-type') || '小型犬');

    const parts = [`已收到 ${name} 的预约意向`];
    if (service) parts.push(`项目：${service}`);
    if (pet) parts.push(`宠物：${pet}`);
    if (phone) parts.push(`手机：${phone}`);
    if (time) parts.push(`到店：${time.replace('T', ' ')}`);
    setStatus(parts.join(' · '));
  };

  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="喵汪洗护馆首页">
            <span className="brand-mark">🐾</span>
            <span>喵汪洗护馆</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#services">服务</a>
            <a href="#advantages">优势</a>
            <a href="#gallery">案例</a>
            <a href="#pricing">套餐</a>
            <a href="#reserve">预约</a>
          </nav>
          <a className="nav-cta" href="#reserve">
            立即预约
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="reveal">
              <div className="eyebrow">专业宠物洗护 · 造型 · 护理 · 接送服务</div>
              <h1>
                让每一次洗护，
                <br />
                <span className="gradient-text">都像在做一场温柔 SPA</span>
              </h1>
              <p>
                喵汪洗护馆专注猫狗洗澡、美容修剪、深层护理与皮肤养护。
                我们的店铺采用低敏清洁产品和分区消毒流程，让宠物洗得干净、吹得舒适、回家更精神。
              </p>
              <div className="eyebrow" style={{ marginTop: 16 }}>
                我们的店铺位于苏州市独墅湖区建发微时光邻里中心1楼，支持到店与接送预约。
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#pricing">
                  查看套餐
                </a>
                <a className="btn btn-secondary" href="#services">
                  了解服务
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <strong>1200+</strong>
                  <span>累计服务宠物</span>
                </div>
                <div className="stat">
                  <strong>4.9</strong>
                  <span>客户满意度</span>
                </div>
                <div className="stat">
                  <strong>10min</strong>
                  <span>快速咨询响应</span>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="booking-card" id="reserve">
                <h3>快速预约</h3>
                <p>填写完整信息，我们会优先为你安排洗护时段。</p>
                <form className="booking-grid" onSubmit={handleSubmit}>
                  <div className="booking-row">
                    <div className="field">
                      <label htmlFor="name">联系人</label>
                      <input id="name" name="name" type="text" placeholder="你的姓名" />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">手机号码</label>
                      <input id="phone" name="phone" type="tel" placeholder="请输入手机号" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="time">到店时间</label>
                    <input id="time" name="time" type="datetime-local" defaultValue={getDefaultArrivalTime()} />
                  </div>

                  <div className="service-picker">
                    <div className="service-picker-label">预约项目</div>
                    <div className="service-options" role="radiogroup" aria-label="预约项目选择">
                      {serviceTypes.map((item) => (
                        <label className="service-option" key={item.value}>
                          <input
                            type="radio"
                            name="service-type"
                            value={item.title}
                            defaultChecked={item.defaultChecked}
                          />
                          <span className="service-card">
                            <span className="service-head">
                              <span className="service-icon">{item.icon}</span>
                              <span className="service-meta">
                                <strong>{item.title}</strong>
                                <span>{item.desc}</span>
                              </span>
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <div className="pet-picker-label">宠物信息</div>
                    <div className="pet-options" role="radiogroup" aria-label="宠物类型选择">
                      {petTypes.map((item, index) => (
                        <label className="pet-option" key={item.value}>
                          <input type="radio" name="pet-type" value={item.title} defaultChecked={index === 0} />
                          <span className="pet-card">
                            <span className="pet-avatar">{item.icon}</span>
                            <span className="pet-meta">
                              <strong>{item.title}</strong>
                              <span>{item.desc}</span>
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="note">备注需求</label>
                    <textarea id="note" name="note" rows="3" placeholder="例如：怕水、皮肤敏感、希望做圆脸造型"></textarea>
                  </div>

                  <button className="btn btn-primary" type="submit">
                    提交预约
                  </button>
                </form>
                <div className="booking-status" aria-live="polite">
                  {status || '提交后，店员会尽快与你联系确认档期。'}
                </div>
                <div className="booking-footer">
                  <strong>预约提示</strong>
                  <p>建议提前半天预约，周末和节假日档期较紧；如需接送服务，请在备注中注明上车位置。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>核心服务</h2>
                <p>围绕宠物日常护理与皮肤毛发健康，提供从洗浴到造型的一站式解决方案。</p>
              </div>
            </div>
            <div className="grid-3">
              {services.map((item) => (
                <article className="glass-card service reveal" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>为什么选择我们</h2>
                <p>把体验做得细一点，宠物更放松，主人也更安心。</p>
              </div>
            </div>
            <div className="grid-4">
              {advantages.map((item) => (
                <div className="glass-card feature-block reveal" key={item.title}>
                  <div className="feature-row">
                    <div className="check">{item.num}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>洗护案例</h2>
                <p>全部已替换为 AI 生成的高端宠物洗护案例图，适合直接做首页展示。</p>
              </div>
            </div>
            <div className="gallery">
              {gallery.map((item) => (
                <div className="tile reveal" key={item.title}>
                  <img src={item.src} alt={item.alt} />
                  <div className="caption">
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>推荐套餐</h2>
                <p>可按店面实际价格调整，当前为一个适合展示的示例版本。</p>
              </div>
            </div>
            <div className="grid-3">
              {pricing.map((item) => (
                <article className={`glass-card price-card reveal ${item.featured ? 'featured' : ''}`} key={item.title}>
                  {item.badge ? <div className="price-tag">{item.badge}</div> : null}
                  <h3>{item.title}</h3>
                  <p className="price">
                    {item.price} <span>/ 起</span>
                  </p>
                  <ul className="price-list">
                    {item.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>客户评价</h2>
                <p>真实评论区也可以后续接入表单数据或后台接口。</p>
              </div>
            </div>
            <div className="grid-3">
              {reviews.map((item) => (
                <article className="glass-card review reveal" key={item.meta}>
                  <div className="stars">★★★★★</div>
                  <p>{item.text}</p>
                  <div className="meta">
                    <div className="avatar">{item.avatar}</div>
                    <div>{item.meta}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>常见问题</h2>
                <p>如果你要上线营业页，这一块可以减少大量重复咨询。</p>
              </div>
            </div>
            <div className="faq">
              {faqs.map((item) => (
                <details className="reveal" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2>店铺信息</h2>
                <p>预约入口已经放到首屏，这里用地图方式展示门店位置，方便访客快速确认地址和营业时间。</p>
              </div>
            </div>
            <div className="contact">
              <div className="glass-card map-card reveal">
                <div className="map-topline">
                  <div>
                    <h3>门店地图</h3>
                    <p>苏州市独墅湖区建发微时光邻里中心 1 楼</p>
                  </div>
                  <div className="map-badge">萌宠定位 · 可爱标记</div>
                </div>
                <div className="map-stage" aria-label="店铺地图示意">
                  <div className="map-road road-one" />
                  <div className="map-road road-two" />
                  <div className="map-road road-three" />
                  <div className="park" />
                  <div className="store-marker">
                    <div className="pin" />
                    <div className="store-name">喵汪洗护馆</div>
                  </div>
                  <div className="map-lane">
                    <div className="lane-tag">独墅湖周边</div>
                    <div className="lane-tag">邻里中心</div>
                    <div className="lane-tag">1 楼</div>
                  </div>
                </div>
              </div>

              <div className="glass-card contact-card reveal">
                <h3>店铺信息</h3>
                <div className="contact-list">
                  <div className="contact-item">
                    <div className="check">📍</div>
                    <div>
                      <strong>门店地址</strong>
                      苏州市独墅湖区建发微时光邻里中心 1 楼
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="check">📞</div>
                    <div>
                      <strong>联系电话</strong>
                      021-8888-6688
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="check">🕒</div>
                    <div>
                      <strong>营业时间</strong>
                      每日 09:30 - 20:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2026 喵汪洗护馆. Designed for a single-page pet grooming shop landing page.</div>
      </footer>
    </>
  );
}
