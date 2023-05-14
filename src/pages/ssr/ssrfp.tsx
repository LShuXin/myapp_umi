import { IGetInitialProps } from "umi";

const Ssrfp = (props: { data: any; }) => {
  const { data } = props;
  console.log(9999)
  console.log(data)

  return (
    <>
      <p>这是一个服务端渲染页面，页面用function 定义</p>
      <p>b的值为：{ data.b ? 'data.b == true' : 'data.b == false' }</p>
    </>
  );
}


Ssrfp.getInitialProps = (async () => {
  var res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({a: 1, b: true})
    }, 600)
  })

  return { data: res }
}) as IGetInitialProps

export default Ssrfp;