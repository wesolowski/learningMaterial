<?php

class ContactsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Contact::all();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
		$oInput = Input::json();
		Contact::create(
			array(
				'first_name' => $oInput->first_name,
				'last_name' => $oInput->last_name,
				'email_address' => $oInput->email_address,
				'description' => $oInput->description
			)
		);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Contact::find($id);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$oContact = Contact::find($id);
		$oInput = Input::json();

		$oContact->first_name = $oInput->first_name;
		$oContact->last_name = $oInput->last_name;
		$oContact->email_address = $oInput->email_address;
		$oContact->description = $oInput->description;

		$oContact->save();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		return Contact::find($id)->delete();
	}

}