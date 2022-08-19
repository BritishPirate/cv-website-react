import renderer from 'react-test-renderer';
import HeaderEntry from '../pages/home/HeaderEntry';

it('Returns a correct header entry when created', () =>{
    const component = renderer.create(
        <HeaderEntry title={'Email'} link={'mailto: nur10000@gmail.com'} text={'nur10000@gmail.com'} svg={(<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#FFFFFF" id="email-icon-svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>)} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
    tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});