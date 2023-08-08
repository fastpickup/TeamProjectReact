import { useEffect, useState } from "react";
import { getReivewSelectOne } from "../../api/reviewAPI";

const initState = {
  rno: 0,
  reviewTitle: "",
  reviewContent: "",
  email: "",
  reviewDate: "",
  fileNames: [],
};

const ReadComponent = ({  rno, moveUpdate, moveList  }) => {
  const [review, setReview] = useState(initState);

  useEffect(() => {
    getReivewSelectOne(rno).then((res) => {
      console.log(res);
      setReview(res);
    });

    // getProduct(pno)
    //   .then((data) => {
    //     setProduct(data);

    //     // 삭제 후 뒤로가기했을때 에러처리
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     moveList();
    //   });
  }, [rno]);

  return (
    <div>
  <div className="m-2 p-2 border-2 bg-gray-100 rounded-lg">
    <div className="m-2 p-2 border-b-2">
      <span className="font-bold">Date:</span> {review.reviewDate}
    </div>
    <div className="m-2 p-2 border-b-2">
      <span className="font-bold">Title:</span> {review.reviewTitle}
    </div>

    {review.fileNames.length > 0 ? (
      <div className="m-2 p-2 border-b-2">
        <ul className="list-none flex flex-wrap gap-2">
          {review.fileNames.map((fname, idx) => (
            <li key={idx}>
              <img
                src={`http://localhost/${fname}`}
                alt={`Review Image ${idx}`}
                className="w-20 h-20 object-cover rounded-md border"
              />
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="m-2 p-2 border-b-2 text-center">No Images</div>
    )}

    <div className="m-2 p-2 border-b-2">
      <span className="font-bold">Content:</span> <br />
      {review.reviewContent}
    </div>

    <div className="m-2 p-2 flex justify-end">
      <button
        className="bg-blue-400 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-500 mr-2"
        onClick={() => moveUpdate(review.rno)}
      >
        Modify
      </button>

      <button
        className="bg-blue-400 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-500"
        onClick={moveList}
      >
        List
      </button>
    </div>
  </div>
</div>
  );
};

export default ReadComponent;
