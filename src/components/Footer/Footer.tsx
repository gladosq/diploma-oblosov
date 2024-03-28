import s from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.footerInner}>
        <div className={s.info}>
          Компания АвтоПрайс работает в сфере
          покупки и продажи автомобилей
          уже более 10 лет.
        </div>
        <div className={s.caption}>
          © 2023. ООО «РедКар». Все права защищены. Информация размещенная на сайте не является публичной офертой
        </div>
      </div>
    </div>
  );
}
