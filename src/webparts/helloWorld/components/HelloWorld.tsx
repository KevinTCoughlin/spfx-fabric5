import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import { Button, Customizer, ICustomizerProps, ITheme, createTheme } from 'office-ui-fabric-react';

export const theme: ITheme = createTheme({
  palette: {
    themePrimary: "#6264a7",
    themeLighterAlt: "#f7f7fb",
    themeLighter: "#e1e1f1",
    themeLight: "#c8c9e4",
    themeTertiary: "#989ac9",
    themeSecondary: "#7173b0",
    themeDarkAlt: "#585a95",
    themeDark: "#4a4c7e",
    themeDarker: "#37385d",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#fff"
  },
  semanticColors: {
    bodyBackground: "#fff",
    bodyText: "#333"
  }
});

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const themeCustomizations: ICustomizerProps = {
      settings: {
        theme
      }
    };
    
    return (
      <Customizer {...themeCustomizations}>
        <h1>Hello world</h1>
        <Button text="Test" />
      </Customizer>
    );
  }
}
