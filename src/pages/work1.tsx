import { history } from 'umi';

export default () => {
  const toUserCenter = () => {
    history.push('/user');
  };

  const toLogin = () => {
    history.push({
      pathname: '/login',
      query: {
        a: 'b',
      },
    });
  };

  return (
    <>
      <div>work1 page</div>
      <div onClick={toUserCenter}>to user Center</div>
      <div onClick={toLogin}>to login</div>
    </>
  );
};
