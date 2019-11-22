import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import { Button } from 'office-ui-fabric-react';
import { loadTheme } from 'office-ui-fabric-react';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {

    loadTheme({ palette: { themePrimary: '#ee1100', themeLighterAlt: '#ff1a08', themeLighter: '#ff3222', themeLight: '#ff1a08', themeTertiary: '#71afe5', themeSecondary: '#2b88d8', themeDarkAlt: '#d50f00', themeDark: '#d50f00', themeDarker: '#bb0d00', neutralLighterAlt: '#f8f8f8', neutralLighter: '#f4f4f4', neutralLight: '#eaeaea', neutralQuaternaryAlt: '#dadada', neutralQuaternary: '#d0d0d0', neutralTertiaryAlt: '#c8c8c8', neutralTertiary: '#c2c2c2', neutralSecondary: '#858585', neutralPrimaryAlt: '#4b4b4b', neutralPrimary: '#333333', neutralDark: '#272727', black: '#1d1d1d', white: '#ffffff', } });

    return (
      <div>
        <Button text="Test" />
      </div>
    );
  }
}
