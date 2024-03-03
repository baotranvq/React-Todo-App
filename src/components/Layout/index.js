import classNames from 'classnames/bind'
import styles from './Layout.module.scss'

const cx = classNames.bind(styles)


function Layout ({children}){
    return (
        <div className={cx('wrapper')} >
            <div className={cx('container')} >
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout