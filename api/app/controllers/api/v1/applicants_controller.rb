# frozen_string_literal: true

module Api::V1
    # Controller for Applicants
    class ApplicantsController < ApplicationController
      before_action :set_applicant, only: %i[show update destroy]

      # POST /applicants
      def create
        # We must determine whether the record already exists
        if @applicant
          @applicant.update(applicant_params)
          puts "hi"
          render json: @applicant
        else
          @applicant = Applicant.new(applicant_params)
          if @applicant.save
            render json: @applicant, status: :created
          else
            render json: @applicant.errors, status: :unprocessable_entity
          end
        end
      end
  
      private
  
      def set_applicant
        @applicant = Applicant.find(params[:id])
      end
  
      def applicant_params
        params.permit(
          :id,
          :address,
          :commentary,
          :dept,
          :dept_fields,
          :email,
          :first_name,
          :is_full_time,
          :is_grad_student,
          :last_name,
          :phone,
          :program,
          :student_number,
          :utorid,
          :year_in_program,
        )
      end
    end
  end
  