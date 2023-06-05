import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header__menu']}>
        <h2 className={classes['header__menu-logo']}>morent</h2>
        <div className={classes['header__menu-search']}>
            <input type="text" />
        </div>
      </div>
      <div className={classes['header__buttons']}>settings</div>
    </header>
  );
};

export default Header;
