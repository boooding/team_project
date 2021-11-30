/*
  create article related actions
*/

export const NEW_ARTICLE = "NEW_ARTICLE";
export const NEW_ARTICLE_SUCCESS = "NEW_ARTICLE_SUCCESS";
export const NEW_ARTICLE_FAIL = "NEW_ARTICLE_FAIL";
// export const RESET_ARTICLE =  "RESET_ARTICLE";

export interface NewArticlePayload {
    title: string,
    content: string,
    introduction: string
}

export interface NewArticleAction {
    type: typeof NEW_ARTICLE,
    payload: NewArticlePayload
}

export interface NewArticleSuccessAction {
    type: typeof NEW_ARTICLE_SUCCESS
}

export interface NewArticleFailAction {
    type: typeof NEW_ARTICLE_FAIL,
    message: string
}

export const newArticle = (payload: NewArticlePayload):NewArticleAction => ({
    type: NEW_ARTICLE,
    payload
})

export const newArticleSuccess = ():NewArticleSuccessAction => ({
    type: NEW_ARTICLE_SUCCESS
})

export const newArticleFail = (message: string):NewArticleFailAction => ({
    type: NEW_ARTICLE_FAIL,
    message
})

export type NewArticleType = NewArticleAction
    | NewArticleSuccessAction
    | NewArticleFailAction
