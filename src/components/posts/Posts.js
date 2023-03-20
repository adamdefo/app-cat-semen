import './Posts.scss'

const Posts = function() {
  // console.log(store);

  const tiles = [1, 2, 3];

  return (
    <div className="post-list">
      <div className="title">Posts</div>
      <div className="row">
        {tiles.map((t, idx) => {
          return (
            <div className="col col-4">
              <div className="tile" key={idx.toString()}>
                <div className="tile__header">
                  <h3>Getting started and core concepts</h3>
                  <div className="tile__icon"></div>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true" class="float-right ml-2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 11.3431 5.34315 10 7 10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H7C6.44772 12 6 12.4477 6 13V47C6 47.5523 6.44771 48 7 48H14C14.5523 48 15 48.4477 15 49C15 49.5523 14.5523 50 14 50H7C5.34315 50 4 48.6569 4 47V13Z" fill="#79B8FF"></path>
                    <path d="M23 36C22.4477 36 22 36.4477 22 37C22 37.5523 22.4477 38 23 38H46C46.5523 38 47 37.5523 47 37C47 36.4477 46.5523 36 46 36H23Z" fill="#2188FF"></path>
                    <path d="M22 31C22 30.4477 22.4477 30 23 30H46C46.5523 30 47 30.4477 47 31C47 31.5523 46.5523 32 46 32H23C22.4477 32 22 31.5523 22 31Z" fill="#2188FF"></path>
                    <path d="M23 24C22.4477 24 22 24.4477 22 25C22 25.5523 22.4477 26 23 26H46C46.5523 26 47 25.5523 47 25C47 24.4477 46.5523 24 46 24H23Z" fill="#2188FF"></path>
                    <path d="M22 19C22 18.4477 22.4477 18 23 18H36C36.5523 18 37 18.4477 37 19C37 19.5523 36.5523 20 36 20H23C22.4477 20 22 19.5523 22 19Z" fill="#2188FF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C18.3431 6 17 7.34315 17 9V47C17 48.6569 18.3431 50 20 50H49C50.6569 50 52 48.6569 52 47V9C52 7.34315 50.6569 6 49 6H20ZM19 9C19 8.44772 19.4477 8 20 8H49C49.5523 8 50 8.44772 50 9V47C50 47.5523 49.5523 48 49 48H20C19.4477 48 19 47.5523 19 47V9Z" fill="#2188FF"></path>
                    <path d="M10 36C9.44772 36 9 36.4477 9 37C9 37.5523 9.44772 38 10 38H14C14.5523 38 15 37.5523 15 37C15 36.4477 14.5523 36 14 36H10Z" fill="#2188FF"></path>
                    <path d="M9 31C9 30.4477 9.44772 30 10 30H14C14.5523 30 15 30.4477 15 31C15 31.5523 14.5523 32 14 32H10C9.44772 32 9 31.5523 9 31Z" fill="#2188FF"></path>
                    <path d="M10 24C9.44772 24 9 24.4477 9 25C9 25.5523 9.44772 26 10 26H14C14.5523 26 15 25.5523 15 25C15 24.4477 14.5523 24 14 24H10Z" fill="#2188FF"></path>
                  </svg> */}
                </div>
                <p>New to Actions? Start here. Learn the core concepts and how to get started.</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Posts;
