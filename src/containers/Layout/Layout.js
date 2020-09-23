import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';
import { toggleMenu, toggleTheme, toggleDegree } from '../../redux/ui/actions';


class Layout extends Component {

    componentDidMount() {

        document.body.style.backgroundColor = this.props.isDark ? 'black' : 'white'

    }

    componentDidUpdate() {

        document.body.style.backgroundColor = this.props.isDark ? 'black' : 'white'
    }




    clickDarkModeHandler = (onThemeToggle, isDark) => {

        onThemeToggle(!isDark)

    }


    clickDegreeToggleHandler = (onToggleDegree, isCelcius) => {
        onToggleDegree(!isCelcius)

    }



    sideDrawerClosedHandler = (onMenuToggle) => {

        onMenuToggle(false)

    }


    sideDrawerToggleHandler = (onMenuToggle, isOpen) => {

        onMenuToggle(!isOpen)
    }

    render() {

        const { onMenuToggle, onThemeToggle, onToggleDegree, isOpen, isDark, isCelcius } = this.props

        let theme = isDark ? classes.DarkMode : classes.Regular



        return (

            <div className={theme}>
                <Toolbar
                    isCelcius={isCelcius}
                    theme={isDark}
                    celciusclicked={() => this.clickDegreeToggleHandler(onToggleDegree, isCelcius)}
                    darkclicked={() => this.clickDarkModeHandler(onThemeToggle, isDark)}
                    clicked={() => this.sideDrawerToggleHandler(onMenuToggle, isOpen)} />
                <SideDrawer
                    open={isOpen}
                    closed={() => this.sideDrawerClosedHandler(onMenuToggle)}
                    isCelcius={isCelcius}
                    theme={isDark}
                    celciusclicked={() => this.clickDegreeToggleHandler(onToggleDegree, isCelcius)}
                    darkclicked={() => this.clickDarkModeHandler(onThemeToggle, isDark)} />
                <main>
                    {this.props.children}
                </main>
            </div>

        );
    }


}

const mapStateToProps = (state) => {

    return {
        isOpen: state.ui.isOpen,
        isDark: state.ui.isDark,
        isCelcius: state.ui.isCelcius
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        onMenuToggle: (isOpen) => dispatch(toggleMenu(isOpen)),
        onThemeToggle: (isDark) => dispatch(toggleTheme(isDark)),
        onToggleDegree: (isCelcius) => dispatch(toggleDegree(isCelcius))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);