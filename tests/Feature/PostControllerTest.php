<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    #[Test]
    public function it_can_display_all_posts(): void
    {
        Post::factory()->count(10)->create();

        $response = $this->getJson(route('posts.index'));

        $response
            ->assertStatus(200)
            ->assertJsonCount(10, 'data');
    }

    #[Test]
    public function it_can_create_new_post(): void
    {
        $post = Post::factory()->make();

        $response =
            $this->postJson(route('posts.store'), [
                'title' => $post->title,
                'author' => $post->author,
                'body' => $post->body,
            ]);

        $response
            ->assertStatus(201)
            ->assertJson(['data' => [
                'title' => $post->title,
                'author' => $post->author,
                'body' => $post->body,
            ]]);

        $this->assertDatabaseHas('posts', [
            'title' => $post->title,
            'author' => $post->author,
            'body' => $post->body,
        ]);
    }

    #[Test]
    public function title_is_required(): void
    {
        $post = Post::factory()->create([
            'author' => fake()->name,
            'body' => fake()->paragraph,
        ]);

        $response = $this->postJson(route('posts.store', [
            'author' => $post->author,
            'body' => $post->body,
        ]));

        $response->assertStatus(422);
    }

    #[Test]
    public function it_can_return_one_post(): void
    {
        $post = Post::factory()->create();

        $response = $this->getJson(route('posts.show', $post));
        $response->assertStatus(200);
    }


    #[Test]
    public function it_can_update_a_post(): void
    {
        $post = Post::factory()->create();

        $response = $this->putJson(route('posts.update', $post), [
            'title' => 'New title',
            'author' => 'New author',
            'body' => 'New body'
        ]);

        $post->refresh();

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                'title' => 'New title',
                'author' => 'New author',
                'body' => 'New body'
            ]
        ]);

        $this->assertEquals('New title', $post->title);
        $this->assertEquals('New author', $post->author);
        $this->assertEquals('New body', $post->body);
    }

    #[Test]
    public function it_can_delete_post(): void
    {
        $post = Post::factory()->create();

        $response = $this->deleteJson(route('posts.destroy', $post));

        $response->assertStatus(204);
        $this->assertDatabaseMissing('posts', ['id' => $post->id]);
    }
}
