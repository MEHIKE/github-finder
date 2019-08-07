import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    // }
    //render() {
        //const {login, avatar_url, html_url} = this.state
        //const {login, avatar_url, html_url} = props.user
        
        return (
            <div className='card text-center'>
                <img 
                    src={avatar_url}
                    alt=''
                    className='round-img'
                    style={{ width: '60px'}}
                    ></img>
                    <h3>{login}</h3>
                    <div>
                        <a href={html_url} className='btn btn-dark btn-sm my-1'>
                            More
                        </a>
                    </div>
                    <div>
                        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                            More
                        </Link>
                    </div>
            </div>
        )
    //}
}

UserItem.propTypes =    {
    user: PropTypes.object.isRequired
}

export default UserItem
