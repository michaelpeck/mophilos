import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PostsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rating: '',
            content: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputContent = async event => {
        const content = event.target.value
        this.setState({ content })
    }

    handleUpdatePost = async () => {
        const { id, name, rating, content } = this.state
        const payload = { name, rating, content }

        await api.updatePostById(id, payload).then(res => {
            window.alert(`Post updated successfully`)
            this.setState({
                name: '',
                rating: '',
                content: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const post = await api.getPostById(id)

        this.setState({
            name: post.data.data.name,
            rating: post.data.data.rating,
            content: post.data.data.content,
        })
    }

    render() {
        const { name, rating, content } = this.state
        return (
            <Wrapper>
                <Title>Create Post</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Content: </Label>
                <InputText
                    type="text"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Button onClick={this.handleUpdatePost}>Update Post</Button>
                <CancelButton href={'/posts/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PostsUpdate
