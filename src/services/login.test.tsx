import { login } from "./login";


describe('login', () => {

    let mockAlert = jest.fn();
    window.alert = mockAlert;

    it('Must show a welcome alert to the user.', () => {
        login();
        expect(mockAlert).toBeCalled()
    })
})