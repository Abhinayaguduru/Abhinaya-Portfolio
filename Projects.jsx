function Projects(){
  return(
    <section id='projects'>
      <h2 className='title'>Projects</h2>

      <div className='grid'>

        <div className='card'>
          <h3>Iris Tumor Detection using CNN</h3>
          <br/>
          <p>
            Trained CNN model to classify iris tumor images into stages, type & risk level — 90%+ validation accuracy.
            Applied image preprocessing (resizing, normalization, augmentation) on 1,000+ labeled images.

          </p>
        </div>

        <div className='card'>
          <h3>Explainable AI-Based Anemia Prediction</h3>
          <br/>
          <p>
            Machine learning model using SHAP/LIME explainability.
            Built classification model predicting anemia severity from blood panel data — 87% test accuracy.

          </p>
        </div>

      </div>
    </section>
  )
}

export default Projects
