import './Page.scss'

const Page = function({title}) {

  return (
    <>
      <div className="title">{ title }</div>
      <div className="page-content"></div>
    </>
  );
}

export default Page;
