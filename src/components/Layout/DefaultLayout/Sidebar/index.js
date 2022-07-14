import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
    return <aside className={cx('warpper')}>Sidebar</aside>;
}

export default Sidebar;
