import './Posts.scss'

const Posts = function() {
  // console.log(store);

  const tiles = [1, 2, 3];

  return (
    <div className="post-list">
      <div className="title">Posts</div>
      <div className="row">
        {tiles.map((t, idx) => (
          <div className="col col-4" key={idx}>
            <div className="tile">
              <div className="tile__header">
                <h3>Getting started and core concepts</h3>
                <div className="tile__icon"></div>
              </div>
              <p>New to Actions? Start here. Learn the core concepts and how to get started.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
