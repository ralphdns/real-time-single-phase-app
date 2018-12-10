<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyResource;
use App\Model\Question;
use App\Model\Reply;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Question $question)
    {
        //type of replies here, is dat related to a particular question. thus, we have "Question $question" as parameters
        return ReplyResource::collection($question->replies);

//        return $replies = Reply::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Question $question, Request $request)
    {
        //since the route  "api.question.{question}.reply", requires that we create a reply to a particular question,
        //thus we use the logic below
        //recall d relationship below is coming frm models as well
        $reply = $question->replies()->create($request->all());
        return response(['reply' => new ReplyResource($reply)], Response::HTTP_CREATED);
    }

    public function update(Question $question, Request $request, Reply $reply)
    {
        $reply->update($request->all());
        return response('Updated', Response::HTTP_ACCEPTED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question, Reply $reply)
    {
        //we included "Question $question" above, jst to make sure the RouteKeyName for the particular question we refer to, is grabbed.
        //type of replies here, is dat related to a particular question. thus, we have "Question $question" as parameters

        return new ReplyResource($reply);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question, Reply $reply)
    {
        //
        $reply->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
