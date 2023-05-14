import { IGetInitialProps } from 'umi';
import React from 'react';

class Ssrcp extends React.Component {
  static getInitialProps = (async (ctx) => {
    var res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({a: 1, b: true});
      }, 600)
    })

    return {
      data: res
    };
  }) as IGetInitialProps

  render() {
    const { data } = this.props as {data: any};

    return (
      <>
        <p>这是一个服务端渲染页面，页面用class 定义</p>
        <p>a的值为：{ data.a }</p>
      </>
    );
  }
}

export default Ssrcp;