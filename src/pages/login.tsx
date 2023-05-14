import { history } from 'umi';

export default () => {
  const goBack = function () {
    history.goBack();
  };

  return (
    <>
      <div>
        login page
        <div onClick={goBack}>go back</div>
      </div>
      ;
    </>
  );
};
