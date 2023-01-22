{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}
  
  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError('no network!')
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    
    login() {
      // 에러 발생 시 우아하게, 고급스럽게 처리하지 못한다면 catch 하지 않는게 더 나을 수 있다.
      // 이 위치는 어정쩡하다
      // try {
        this.client.tryConnect();
      // } catch(error) {
        // console.log('catched');
      // }
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 이렇게 우아하게 처리 가능한 곳에서 catch 하는게 중요하다
      try {
        this.userService.login()
      } catch(error) {
        // show dialog to user
        console.log(error instanceof OfflineError)
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}