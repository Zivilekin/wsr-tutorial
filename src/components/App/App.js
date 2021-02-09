import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '@wix/wix-i18n-config';
import s from './App.scss';

class App extends React.Component {
  static propTypes = {
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <h2 className={s.title} data-hook="app-title">
          {t('app.title', { who: 'Yoshi' })}
        </h2>
      </div>
    );
  }
}

export default withTranslation()(App);
