{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}
  class NetworkClientBad {
    tryConnect(): void {
      // 이렇게 에러를 나눌 수 있긴 하지만 try catch에서 사용되는 error는 any 타입이다.
      throw new OfflineError('no network!')
    }
  }

  type SuccessState = {
    result: 'success'
  }

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout'
  }
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    
    login() {
        this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login()
      } catch(error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}