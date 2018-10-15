import '../_styles/Home.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions/user.actions';
import {TodoContainer} from './TodoContainer';
import {todoActions} from '../_actions/todo.actions';
import {Navbar,Well} from 'react-bootstrap';
import {Collapse, CardBody, Card,Container, Row, Col,Button,Nav,NavLink } from 'reactstrap';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    componentDidMount() {
        const { user } = this.props;  
      this.props.dispatch(todoActions.GetTodos(user._id));    
      this.props.dispatch(userActions.getAll());         
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users,todos } = this.props;       
        return (
            <div > 
                 <Navbar inverse collapseOnSelect>                   
                    <Navbar.Header>
                    <Navbar.Brand>
                        <Navbar.Text>
                            <a href="#home">Todo App</a>
                        </Navbar.Text> 
                    </Navbar.Brand>                     
                    </Navbar.Header>                                                
                    <Navbar.Text>Signed in as: </Navbar.Text>
                    <NavLink href="#">{user.firstName}</NavLink>
                    <Nav className="ml-auto">
                        <Button color="link">                            
                            <Link to="/login">Logout</Link>
                        </Button> 
                    </Nav>                        
                </Navbar>
                <Container>
                <h3>Hi {user.firstName}!</h3> 
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>All Registered Users</Button>
                <Collapse isOpen={this.state.collapse}>
                <Card>
                    <CardBody>
                    <Container>
                        {users.items.map((user, index) =>
                            <Well bsSize="small" key={user.id}>
                                <Row key={user.id}>
                                                            
                                    <Col xs="11"> {user.firstName + ' ' + user.lastName}</Col>
                                    <Col xs="1"> {
                                            user.deleting ? <em> Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <Button color="link"><Link  to="/" onClick={this.handleDeleteUser(user.id)}>Delete</Link></Button>
                                        }
                                        </Col>
                                </Row>
                            </Well>    
                        )}
                    </Container>
                    </CardBody>
                </Card>
                </Collapse>
                </div>
                }
                <TodoContainer todos={todos} dispatch={this.props.dispatch} user={user}/> 
            </Container>  
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,todos } = state;
    const { user } = authentication;
    return {
        user,
        users,
        todos
    };
}

// This maps the dispatch to the property of the component

//   function mapDispatchToProps(dispatch) {     
//          return bindActionCreators({ todoActions, userActions }, dispatch);             
//   }

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };