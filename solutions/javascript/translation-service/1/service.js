/// <reference path="./global.d.ts" />
// @ts-check


export class TranslationService {
  constructor(api) {
    this.api = api;
  }
  free(text) {
    return this.api.fetch(text).then( (text) => text.translation).catch( (error) => { throw error })
  }

  batch(texts) {
    if (texts.length < 1 ) {
     return Promise.reject( new BatchIsEmpty())
    }
    else{
    let promises = texts.map( text => this.free(text))
    return Promise.all(promises)
    }
  }

  request(text) {
    
     const translationReq = () => 
      new Promise( (resolve, reject) => {
      this.api.request(text, respond => respond ? reject(respond) : resolve(undefined) )
     })

    const retryReq = (fn, retries = 2) => {
       return fn().catch( (err) => { 
         if ( retries < 1) throw err
         return retryReq( fn ,  retries - 1)
       })
    }

    return retryReq(translationReq)

  }

  premium(text, minimumQuality) {
     return this.api.fetch(text)
       .catch(() => {
         return this.request(text).then( () => this.api.fetch(text) )
       })
      .then( respond => {
        if ( respond.quality  < minimumQuality ) throw new QualityThresholdNotMet()
        return respond.translation
      })
  }
}

export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(`Requested a batch translation, but there are no texts in the batch.`.trim(),
    );
  }
}
