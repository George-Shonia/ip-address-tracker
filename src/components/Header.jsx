import classes from "../modules/Header.module.scss";
import ArrowIcon from "../assets/images/icon-arrow.svg";

const Header = ({onSubmitHandler, onChangeHandler}) => {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["header-container"]}>
        <h1>IP Address Tracker</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Search for any IP Address or Domain"
            onChange={onChangeHandler}
          />
          <button type="submit">
            <img src={ArrowIcon} alt="arrow-icon-button" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
