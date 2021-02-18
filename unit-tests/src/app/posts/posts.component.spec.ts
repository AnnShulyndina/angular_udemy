import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {EMPTY, of, throwError} from "rxjs";

describe('PostComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })

  it('', () => {
    const post = {title: 'test'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))
    component.add('test')
    expect(spy).toHaveBeenCalled()
    expect(component.posts.includes(post)).toBeTruthy()
  })

  it('should add new post', () => {
    const error = 'error message'
    spyOn(service, 'create').and.returnValue(throwError(error))
    component.add('post title')
    expect(component.message).toBe(error)
  })

})


