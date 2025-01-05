import css from "./TrainingPage.module.css";

const TrainingPage = () => {
  return (
    <>
      <div className={css.emptyDiv}>
        <div className={css.textDiv}>
          <h3 className={css.h3}>You don`t have a single word to learn right now.</h3>
          <p className={css.p}>
             Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </p>
		  <div className={css.buttonDiv}>
			<button className={css.addWordBtn}>Add word</button>
			<button className={css.cancelBtn}>Cancel</button>


		  </div>
        </div>
        <div className={css.pictureDiv}>

		</div>
      </div>
    </>
  );
};

export default TrainingPage;
