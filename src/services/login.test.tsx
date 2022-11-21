import { login } from "./login";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        isLogged: true,
    })
}))

// describe('login', () => {

  
//     let mockAlert = jest.fn();
//     window.alert = mockAlert;

//     it('Must show a welcome alert to the user.', () => {
//         login('username');
//         expect(mockAlert).toBeCalled()
//     })
// })