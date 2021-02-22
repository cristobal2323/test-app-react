import React, { useEffect } from "react";

/* Redux */
import { useSelector, useDispatch } from "react-redux";

/* Actions */

import { getHome, resetHome } from "../../actions/home";

const List = (props) => {
  const state = useSelector((state) => state.home);
  const dispatch = useDispatch();

  /* Call to Api */
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getHome({}));
    };
    callsAPI();
  }, [dispatch]);

  /* Reset state */
  useEffect(() => {
    return () => {
      dispatch(resetHome());
    };
  }, [dispatch]);

  if (state.loading) {
    return <div className={props.style.container}>Cargando</div>;
  } else if (state.status === 401) {
    return <div className={props.style.container}>Problema con la api</div>;
  }

  return (
    <section className={props.style.container}>
      {state.data.results.map((item) => (
        <article key={item.id} className={props.style.box}>
          <div className={props.style.box__image}>
            <img alt={item.image} src={item.image} />
          </div>
          <div className={props.style.box__text}>
            <h3>{item.name}</h3>
          </div>
        </article>
      ))}
    </section>
  );
};

export default List;
