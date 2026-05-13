/*
/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.
*/
export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    // const b = async () => {
    //   const a = await this.api.fetch(text).then((value) => value.translation);
    //   console.log("a", a);
    //   return a;
    // }
    // console.log("b", typeof b);
    // return b;

    // console.log(typeof this.api.fetch(text).then((value) => value.translation));
    return this.api.fetch(text).then((value) => value.translation)
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }

    // 1.
    // return Promise.all(texts.map(this.free.bind(this)));

    // 2.
    return Promise.all(texts.map((t)=>(this.free(t))));

    // 3. not works
    // const arr = [];
    // for (let i=0; i<texts.length; i++) {
    //   arr.push((this.free(texts[i])));
    // }
    // return arr;
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    const promise1 = () => new Promise((resolve,reject)=>{
      this.api.request(text, (result) => {
        result ? reject(result) : resolve();
      });
    });
    return promise1().catch(promise1).catch(promise1);
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
  //   const sa = (async () => {
  //     const sb = await this.api.fetch(text);
  //     console.log(typeof sb);
  //     return sb;
  //   });
    
  //   console.log(sa);
  //   return sa;
  // }
    return this.api.fetch(text)
      .catch(() => {
        return this.request(text).then(() => this.api.fetch(text));
      })
      .then((result) => {
        if (result.quality < minimumQuality) {
          throw new QualityThresholdNotMet();
        }
        return result.translation;
      })
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
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
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
