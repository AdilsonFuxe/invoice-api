

export type Controller = (input: Controller.Input) => Promise<Controller.Output>

export namespace Controller {
  export type Input<T = any> = {
    body: T,
    params: Record<string, any>
  }

  export type Output<T = any> = {
    body?: T,
    status: number
  }
}