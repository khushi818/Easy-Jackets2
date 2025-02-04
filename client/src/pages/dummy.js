// /// home

// <img
// src={bannerImage}
// className="banner-img"
// alt="bannerimage"
// width={"100%"}
// />
// <div className="container-fluid row mt-3 home-page">
// <div className="col-md-3 filters">
//   <h4 className="text-center">Filter By Category</h4>
//   <div className="d-flex flex-column">
//     {categories?.map((c) => (
//       <Checkbox
//         key={c._id}
//         onChange={(e) => handleFilter(e.target.checked, c._id)}
//       >
//         {c.name}
//       </Checkbox>
//     ))}
//   </div>
//   {/* price filter */}
//   <h4 className="text-center mt-4">Filter By Price</h4>
//   <div className="d-flex flex-column">
//     <Radio.Group onChange={(e) => setRadio(e.target.value)}>
//       {Prices?.map((p) => (
//         <div key={p._id}>
//           <Radio value={p.array}>{p.name}</Radio>
//         </div>
//       ))}
//     </Radio.Group>
//   </div>
//   <div className="d-flex flex-column">
//     <button
//       className="btn btn-danger"
//       onClick={() => window.location.reload()}
//     >
//       RESET FILTERS
//     </button>
//   </div>
// </div>
// <div className="col-md-9 ">
//   <h1 className="text-center">All Products</h1>
//   <div className="d-flex flex-wrap">
//     {products?.map((p) => (
//       <div className="card m-2" key={p._id}>
//         <img
//           src={`/api/v1/product/product-photo/${p._id}`}
//           className="card-img-top"
//           alt={p.name}
//         />
//         <div className="card-body">
//           <div className="card-name-price">
//             <h5 className="card-title">{p.name}</h5>
//             <h5 className="card-title card-price">
//               {p.price.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </h5>
//           </div>
//           <p className="card-text ">
//             {p.description.substring(0, 60)}...
//           </p>
//           <div className="card-name-price">
//             <button
//               className="btn btn-info ms-1"
//               onClick={() => navigate(`/product/${p.slug}`)}
//             >
//               More Details
//             </button>
//             <button
//               className="btn btn-dark ms-1"
//               onClick={() => {
//                 HandleClick(p.category.code);
//               }}
//               // onClick={() =>
//               //   navigate(
//               //     `/https://jacket-ecomm.vercel.app/?id=${5764}&token=${
//               //       p._id
//               //     }`
//               //   )
//               // }

//               // setCart([...cart, p]);
//               // localStorage.setItem(
//               //   "cart",
//               //   JSON.stringify([...cart, p])
//               // );
//               // toast.success("Item Added to cart")
//             >
//               <a
//                 href={`https://jacket-ecomm.vercel.app/?id=${p.category.code}&token=${token}`}
//               >
//                 Customize
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
//   <div className="m-2 p-3">
//     {products && products.length < total && (
//       <button
//         className="btn loadmore"
//         onClick={(e) => {
//           e.preventDefault();
//           setPage(page + 1);
//         }}
//       >
//         {loading ? (
//           "Loading ..."
//         ) : (
//           <>
//             {" "}
//             Loadmore <AiOutlineReload />
//           </>
//         )}
//       </button>
//     )}
//   </div>
// </div>
// </div>
