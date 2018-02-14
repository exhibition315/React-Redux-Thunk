export default {
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../containers/Main/Index').default);
                }, 'Main'); // 產生 Main.chunk.js
            }
        }
    ]
};

// reference
// https://segmentfault.com/a/1190000007141049
// http://jason-wang.logdown.com/posts/737515-integration-react-router-webpack-code-splitting-and-react
